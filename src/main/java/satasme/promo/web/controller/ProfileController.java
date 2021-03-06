
package satasme.promo.web.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.ServletContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import satasme.promo.web.entity.ImageModel;
import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.ProfileDetailResponse;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.exceptions.ResourceNotFoundException;
import satasme.promo.web.repository.LoginRepository;
import satasme.promo.web.repository.PaymentReceiverRepositoryImpl;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.repository.UserRepository;
import satasme.promo.web.service.FilesStorageServiceImpl;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private LoginRepository loginRepository;
	@Autowired
	private PaymentReceiverRepositoryImpl paymentRepositoryImpl;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserPointsRepository userPointsRepository;
	@Autowired
	private FilesStorageServiceImpl filesStorageServiceImpl;
	@Autowired
	ServletContext context;
	
	
	@GetMapping("/{id}")
	public String getReferral(@PathVariable(value = "id") long userid) {
		String responseText="";
		double total_points=0;
		User user=userRepository.findById(userid).orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		if (user.getFname()!=null && !(user.getFname().isEmpty())) {
			total_points+=2;
		}
		if (user.getLname()!=null && !(user.getLname().isEmpty())) {
			total_points+=2;
		}
		
		if (user.getMobile()!=0) {
			total_points+=8;
		}
		
		if (user.getStatus().equals("verified")) {
			total_points+=8;
		}
		if (user.getWhatsapp()!=0) {
			total_points+=8;
		}
		if (user.getViber()!=0) {
			total_points+=8;
		}
		if (user.getTeligram()!=0) {
			total_points+=8;
		}
		if (user.getWechat()!=null && !(user.getWechat().isEmpty())) {
			total_points+=8;
		}
		if (user.getFbplink()!=null && !(user.getFbplink().isEmpty())) {
			total_points+=8;
		}
		if (user.getCurrentLiving()!=null && !(user.getCurrentLiving().isEmpty())) {
			total_points+=5;
		}
		if (user.getCountry()!=null && !(user.getCountry().isEmpty())) {
			total_points+=5;
		}
		if (user.getResident()!=null && !(user.getResident().isEmpty())) {
			total_points+=5;
		}
		if (user.getIdnumber()!=null && !(user.getIdnumber().isEmpty())) {
			total_points+=10;
		}
		if (user.getPassport()!=null && !(user.getPassport().isEmpty())) {
			total_points+=10;
		}
		if (user.getDob()!=null && !(user.getDob().isEmpty())) {
			total_points+=4;
		}
		if (user.getAge()!=null && !(user.getAge().isEmpty())) {
			total_points+=3;
		}
		if (user.getEducation()!=null && !(user.getEducation().isEmpty())) {
			total_points+=10;
		}
		if (user.getGender()!=null && !(user.getGender().isEmpty())) {
			total_points+=4;
		}
		if (user.getSpecialization()!=null && !(user.getSpecialization().isEmpty())) {
			total_points+=0;
		}
		
		if (user.getUniversity()!=null && !(user.getUniversity().isEmpty())) {
			total_points+=10;
		}
		if (user.getCollage()!=null && !(user.getCollage().isEmpty())) {
			total_points+=10;
		}
		if (user.getOccupation()!=null && !(user.getOccupation().isEmpty())) {
			total_points+=10;
		}
		if (user.getEmployer()!=null && !(user.getEmployer().isEmpty())) {
			total_points+=10;
		}
		if (user.getDesignation()!=null && !(user.getDesignation().isEmpty())) {
			total_points+=10;
		}
		if (user.getHobbies()!=null && !(user.getHobbies().isEmpty())) {
			total_points+=10;
		}
		
		
		
		if (user.getAddresLine1()!=null && !(user.getAddresLine1().isEmpty())&&user.getAddresLine2()!=null && !(user.getAddresLine2().isEmpty())&&user.getResizipcode()!=null && !(user.getResizipcode().isEmpty())&&user.getResidistrict()!=null && !(user.getResidistrict().isEmpty())&&user.getResiprovince()!=null && !(user.getResiprovince().isEmpty())&&user.getResinetialcountry()!=null && !(user.getResinetialcountry().isEmpty())) {
			total_points+=8;
		}
		
		Criteria crp = em.unwrap(Session.class).createCriteria(ImageModel.class);
		crp.add(Restrictions.eq("user", user));
		ImageModel imgmModel=(ImageModel) crp.uniqueResult();
		
		if(imgmModel!=null) {
			if(imgmModel.getPicByte()!=null) {
			
				total_points+=8;
				
			}
		}
		
		PaymentReceiver payList=paymentRepositoryImpl.findUserFullDetails(user.getId());
		if (payList.getCity()!=null && !(payList.getCity().isEmpty())&&payList.getCountry()!=null && !(payList.getCountry().isEmpty())&&payList.getCurrency()!=null && !(payList.getCurrency().isEmpty())&&payList.getP_pay()!=null && !(payList.getP_pay().isEmpty())&&payList.getFname()!=null && !(payList.getFname().isEmpty())&&payList.getLname()!=null && !(payList.getLname().isEmpty())&&payList.getLname()!=null && !(payList.getLname().isEmpty())&&payList.getLname()!=null && !(payList.getLname().isEmpty())&&payList.getPostal()!=null && !(payList.getPostal().isEmpty())&&payList.getRegion()!=null && !(payList.getRegion().isEmpty())&&payList.getStreet()!=null && !(payList.getStreet().isEmpty())&&payList.getAddresno()!=null && !(payList.getAddresno().isEmpty())) {
			total_points+=8;
		}
	
		
		if(total_points==199.99) {
			Criteria cr = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr.add(Restrictions.eq("user", user));
			cr.add(Restrictions.eq("pointSource", "Profile Completion"));
			if (cr.list()==null) {
				String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
				Criteria cr2 = em.unwrap(Session.class).createCriteria(Points.class);
				cr2.add(Restrictions.eq("pointSource", "Profile Completion"));
				Points points = (Points) cr2.uniqueResult();
				UserPoints userPoints=new UserPoints();
				userPoints.setPoints(points.getPoints());
				userPoints.setPointSource("Profile Completion");
				userPoints.setDate(crrdate);
				userPoints.setStatus("Active");
				userPoints.setUser(user);
				this.userPointsRepository.save(userPoints);
			}
			
			responseText="compeleted";
		}else {
			int round_ponts = (int) total_points;
			responseText="Your profile is "+round_ponts+"% completed.";
		
		}
		return responseText;
	}
	
	@GetMapping("/detail/{id}")
	public ProfileDetailResponse getProfileDetail(@PathVariable(value = "id") long userid) {
		
		ProfileDetailResponse pdr=new ProfileDetailResponse();
		Criteria cr2 = em.unwrap(Session.class).createCriteria(User.class);
		cr2.add(Restrictions.eq("id", userid));
		User crruser = (User) cr2.uniqueResult();
		pdr.setEmail(crruser.getEmail());
		if (crruser.getMobile()==0) {
			pdr.setMobile("Not Selected");
		}else {
			pdr.setMobile(""+crruser.getMobile());
		}
		double total_points=0;
		Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
		cre.add(Restrictions.eq("user", crruser));
		cre.add(Restrictions.eq("status", "Active"));
		List<UserPoints> list = cre.list();
		for (UserPoints up : list) {
			total_points+=up.getPoints();
		}
		total_points=total_points*0.001;
		pdr.setPoints("$"+total_points);
		return pdr;
	}
	
	@GetMapping("/profileimage/{id}")
	public ImageModel getProfileImage(@PathVariable(value = "id") long userid) {
		
//		Criteria cr2 = em.unwrap(Session.class).createCriteria(User.class);
//		cr2.add(Restrictions.eq("id", userid));
//		User crruser = (User) cr2.uniqueResult();
//		
//		Resource loadProfile = filesStorageServiceImpl.loadProfile(crruser.getImg());
//		URI uri = null;
//		try {
//			uri = loadProfile.getURI();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return uri;
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", userid));
		User crruser = (User) cr.uniqueResult();
		Criteria crp = em.unwrap(Session.class).createCriteria(ImageModel.class);
		crp.add(Restrictions.eq("user", crruser));
		ImageModel imgmModel=new ImageModel();
		if (!crp.list().isEmpty()) {
			List<ImageModel> list = crp.list();
			for (ImageModel img : list) {
				img.setPicByte(decompressBytes(img.getPicByte()));
				imgmModel=img;
			}
		}
		return imgmModel;
	}
	
	public static byte[] decompressBytes(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();
	}
}
