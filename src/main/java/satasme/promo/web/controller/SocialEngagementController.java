package satasme.promo.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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

import satasme.promo.web.entity.*;
import satasme.promo.web.repository.*;

@RestController
@RequestMapping("/api/socialengage")
public class SocialEngagementController {
	@Autowired
	private UserRepository userRepository;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserPointsRepository userPointsRepository;
	@Autowired
	private OrdersRepository ordersRepository;
	@Autowired
	private UserSocialEngagementRepository engagementsrep;
	@Autowired
	private UserSocialEngagementRepositoryImpl engagementsImpl;
	@Autowired
	private ScreenShotsRepository screenShotsRepository;

	@PostMapping
	public String enagageInSocial(@RequestBody ObjectNode node) {
		String service = node.get("service").asText();
		String userid = node.get("userid").asText();
		String orderid = node.get("orderid").asText();

		Criteria cr1 = em.unwrap(Session.class).createCriteria(User.class);
		cr1.add(Restrictions.eq("id", Long.valueOf(userid)));
		User user = (User) cr1.uniqueResult();

		String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());

		Criteria cr = em.unwrap(Session.class).createCriteria(Points.class);
		if (service.equals("Website View")) {
			cr.add(Restrictions.eq("pointSource", "Website Views"));
		} else {
			cr.add(Restrictions.eq("pointSource", service));
		}
		Points points = (Points) cr.uniqueResult();

		Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
		cre.add(Restrictions.eq("user", user));
		cre.add(Restrictions.eq("date", crrdate));
		List<UserPoints> po_list = cre.list();
		double totalpoints = 0;
		for (UserPoints up : po_list) {
			totalpoints += up.getPoints();
		}
		totalpoints = totalpoints + points.getPoints();
		double daily_limit = 0;
		Criteria crdl = em.unwrap(Session.class).createCriteria(DailyEarnLimit.class);
		crdl.add(Restrictions.eq("type", "Daily Limit"));
		if (!(crdl.list().isEmpty())) {
			DailyEarnLimit limit = (DailyEarnLimit) crdl.uniqueResult();
			daily_limit = limit.getLimit();
		}
		if (totalpoints >= daily_limit) {
			return "exceed";
		} else {
			if (!(service.equals("Servey Fill") || service.equals("Website View"))) {
				Criteria cr2 = em.unwrap(Session.class).createCriteria(Orders.class);
				cr2.add(Restrictions.eq("id", orderid));
				Orders order = (Orders) cr2.uniqueResult();
				UserSocialEngagement engagement = new UserSocialEngagement();
				engagement.setService(service);
				engagement.setDate(crrdate);
				engagement.setUser(user);
				engagement.setOrders(order);
				this.engagementsrep.save(engagement);
				
				
//				//check order availability
//				Criteria crue = em.unwrap(Session.class).createCriteria(UserSocialEngagement.class);
//				crue.add(Restrictions.eq("orders", order));
//				crue.add(Restrictions.like("service", service));
//				int size = crue.list().size();
//				String qty = order.getQty();
//				if (order.getService().contains(",")) {
//					String[] split = order.getService().split(",");
//					for (String s : split) {
//						int getqty=Integer.parseInt(s);
//						if (getqty<=size) {
////							order.setStatus("completed");
//						}
//					}
//				}else {
//					int getqty=Integer.parseInt(qty);
//					if (getqty<=size) {
////						order.setStatus("completed");
//					}
//				}
//
//				// add points
//
				UserPoints userPoints = new UserPoints();
				userPoints.setPoints(points.getPoints());
				userPoints.setPointSource(service);
				userPoints.setDate(crrdate);
				userPoints.setStatus("Active");
				userPoints.setUser(user);
				this.userPointsRepository.save(userPoints);
			}

			return "success";
		}

	}
	@PostMapping("/removess")
	public String removePoint(@RequestBody ObjectNode node){
		String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
		String userid = node.get("userid").asText();
		String point = node.get("point").asText();
		String ssid = node.get("ssid").asText();
		User user = this.userRepository.findById(Long.valueOf(userid)).get();
		double removePoint= (-1)* Double.valueOf(point);
				UserPoints userPoints = new UserPoints();
				userPoints.setPoints(removePoint);
				userPoints.setDate(crrdate);
				userPoints.setStatus("Active");
				userPoints.setUser(user);
				this.userPointsRepository.save(userPoints);
				this.screenShotsRepository.deleteById(Long.valueOf(ssid));

		return "success";



	}
	@GetMapping("/{id}/{service}")
	public List<SocialEngagementResponse> getEngagementsByUser(@PathVariable(value = "id") long userid,
			@PathVariable(value = "service") String service) {

		return engagementsImpl.findEngagementsById(userid, service);
	}
}
