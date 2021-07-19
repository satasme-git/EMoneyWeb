package satasme.promo.web.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.DailyEarnLimit;
import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.PayoutResponse;
import satasme.promo.web.entity.SocialEngagementResponse;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPayments;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.repository.OrdersRepository;
import satasme.promo.web.repository.UserPaymentRepository;
import satasme.promo.web.repository.UserPaymentRepositoryCustom;
import satasme.promo.web.repository.UserPaymentRepositoryImpl;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.repository.UserRepository;
import satasme.promo.web.repository.UserSocialEngagementRepository;
import satasme.promo.web.repository.UserSocialEngagementRepositoryImpl;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

	@Autowired
	private UserRepository userRepository;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserPointsRepository userPointsRepository;
	@Autowired
	private OrdersRepository ordersRepository;
	@Autowired
	private UserPaymentRepository userPaymentRepository;
	@Autowired
	private UserPaymentRepositoryImpl userPaymentRepositoryImpl;

	@Autowired
	private UserSocialEngagementRepository engagementsrep;
	@Autowired
	private UserSocialEngagementRepositoryImpl engagementsImpl;

	Sheet sheet;
	Workbook wb;
	
	DecimalFormat df=new DecimalFormat("##.##");

	@GetMapping("/pending")
	public List<PayoutResponse> getPaymentSheet() {
		List<PayoutResponse> py_list = new ArrayList<>();
		try {

			Criteria cru = em.unwrap(Session.class).createCriteria(User.class);
			cru.add(Restrictions.eq("status", "verified"));
			List<User> c_list = cru.list();

			for (User user : c_list) {
				Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
				cre.add(Restrictions.eq("status", "Active"));
				cre.add(Restrictions.eq("user", user));
				List<UserPoints> po_list = cre.list();
				double total_points = 0;
				for (UserPoints up : po_list) {
					total_points += up.getPoints();
				}
				Criteria crp = em.unwrap(Session.class).createCriteria(DailyEarnLimit.class);
				crp.add(Restrictions.eq("type", "Payout Limit"));
				DailyEarnLimit limit=(DailyEarnLimit) crp.uniqueResult();
				if ((total_points * 0.001) > limit.getLimit()) {
					Criteria cr = em.unwrap(Session.class).createCriteria(PaymentReceiver.class);
					cr.add(Restrictions.eq("user", user));
					PaymentReceiver payr = (PaymentReceiver) cr.uniqueResult();

					PayoutResponse pr = new PayoutResponse();
					pr.setCus_id(String.valueOf(user.getId()));
					pr.setName(user.getFname() + " " + user.getLname());
					pr.setEmail(user.getEmail());
					pr.setAmount("$" + df.format(total_points * 0.001));
					pr.setCurrency(payr.getCurrency());
					py_list.add(pr);
				}
			}

			return py_list;
		} catch (Exception e) {
			e.printStackTrace();
			return py_list;
		}

	}
	
	@GetMapping("/payed")
	public List<UserPayments> getPayed() {
		return this.userPaymentRepository.findAll();
	}
	
	@GetMapping("/payedall/{user}")
	public String getAllPayByUser(@PathVariable(value = "user") long userid) {
		
		return userPaymentRepositoryImpl.findUserPaymentTotal(userid);
	}
	
	@GetMapping("/payedlist/{user}")
	public List<UserPayments> getPayListByUser(@PathVariable(value = "user") long userid) {
		
		return userPaymentRepositoryImpl.findUserPaymentList(userid);
	}

	@GetMapping("/topay")
	public void getPaymentSheet(HttpServletResponse response) throws IOException {
		List<PayoutResponse> py_list = new ArrayList<>();
		try {
			wb = new XSSFWorkbook();
			response.setContentType("application/octet-stream");
			DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
			String currentDateTime = dateFormatter.format(new Date());

			String headerKey = "Content-Disposition";
			String headerValue = "attachment; filename=payments_" + currentDateTime + ".xlsx";
			response.setHeader(headerKey, headerValue);

			Criteria cru = em.unwrap(Session.class).createCriteria(User.class);
			cru.add(Restrictions.eq("status", "verified"));
			List<User> c_list = cru.list();

			for (User user : c_list) {
				Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
				cre.add(Restrictions.eq("status", "Active"));
				cre.add(Restrictions.eq("user", user));
				List<UserPoints> po_list = cre.list();
				double total_points = 0;
				for (UserPoints up : po_list) {
					total_points += up.getPoints();
				}
				if ((total_points * 0.001) > 10) {
					Criteria crpr = em.unwrap(Session.class).createCriteria(PaymentReceiver.class);
					crpr.add(Restrictions.eq("user", user));
					PaymentReceiver payre=(PaymentReceiver) crpr.uniqueResult();
					PayoutResponse pr = new PayoutResponse();
					pr.setEmail(payre.getP_pay());
					pr.setAmount("" + df.format(total_points * 0.001));
					pr.setCurrency(payre.getCurrency());
					pr.setCus_id("123");
					pr.setNote("Payment for engagements in Emoneytag");
					pr.setWallet("PAYPAL");
					py_list.add(pr);
				}
			}
			export(response,py_list);

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
	@PostMapping
	public String payToUsers(@RequestBody ObjectNode node) {
		String userid = node.get("uid").asText();
		String amount = node.get("amount").asText();
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", Long.valueOf(userid)));
		User user = (User) cr.uniqueResult();
		double getamount=Double.parseDouble(amount.replace("$", ""));
		String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
		UserPayments upay=new UserPayments();
		upay.setUser(user);
		upay.setAmount(String.valueOf(getamount));
		upay.setDate(crrdate);
		upay.setStatus("Success");
		this.userPaymentRepository.save(upay);
		
		
		Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
		cre.add(Restrictions.eq("status", "Active"));
		cre.add(Restrictions.eq("user", user));
		List<UserPoints> po_list = cre.list();
		double total_points = 0;
		for (UserPoints up : po_list) {
			if((total_points * 0.001)<getamount) {
				total_points += up.getPoints();
				up.setStatus("payed");
				this.userPointsRepository.save(up);
			}
		}
		
		return "success";
	}

	private void writeHeaderLine() {
		sheet = wb.createSheet("new sheet");

		Row row = sheet.createRow(0);

		CellStyle style = wb.createCellStyle();
		XSSFFont font = (XSSFFont) wb.createFont();
		font.setBold(true);
		font.setFontHeight(14);
		style.setFont(font);

		createCell(row, 0, "Recipient identifier", style);
		createCell(row, 1, "Payment amount", style);
		createCell(row, 2, "Currency", style);
		createCell(row, 3, "Customer ID", style);
		createCell(row, 4, "Note to Recipient", style);
		createCell(row, 5, "Recipient Wallet", style);

	}

	private void createCell(Row row, int columnCount, Object value, CellStyle style) {
		sheet.autoSizeColumn(columnCount);
		Cell cell = row.createCell(columnCount);
		if (value instanceof Integer) {
			cell.setCellValue((Integer) value);
		} else if (value instanceof Boolean) {
			cell.setCellValue((Boolean) value);
		} else {
			cell.setCellValue((String) value);
		}
		cell.setCellStyle(style);
	}

	private void writeDataLines(List<PayoutResponse> py_list) {
		
		int rowCount = 1;

		CellStyle style = wb.createCellStyle();
		XSSFFont font = (XSSFFont) wb.createFont();
		font.setFontHeight(12);
		style.setFont(font);

		for (PayoutResponse pr : py_list) {
			Row row = sheet.createRow(rowCount++);
			int columnCount = 0;
			createCell(row, columnCount++, pr.getEmail(), style);
			createCell(row, columnCount++, pr.getAmount(), style);
			createCell(row, columnCount++, pr.getCurrency(), style);
			createCell(row, columnCount++, pr.getCus_id(), style);
			createCell(row, columnCount++, pr.getNote(), style);
			createCell(row, columnCount++, pr.getWallet(), style);
		}

	}

	public void export(HttpServletResponse response,List<PayoutResponse> py_list) throws IOException {
		writeHeaderLine();
		writeDataLines(py_list);
		ServletOutputStream outputStream = response.getOutputStream();
		wb.write(outputStream);
		wb.close();

		outputStream.close();

	}
}
