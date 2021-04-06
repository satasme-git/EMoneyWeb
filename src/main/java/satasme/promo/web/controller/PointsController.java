package satasme.promo.web.controller;

import java.text.DecimalFormat;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.DailyEarnLimit;
import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.SocialEngagementResponse;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.model.RandomString;
import satasme.promo.web.repository.DailyEarnLimitRepository;
import satasme.promo.web.repository.PointsRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/points")
public class PointsController {

	@Autowired
	private PointsRepository pointsRepository;
	@Autowired
	DailyEarnLimitRepository dailyrepo;
	@PersistenceContext
	protected EntityManager em;

	@PostMapping
	public String createPoints(@RequestBody ObjectNode node) {
		Points points = new Points();
		points.setPointSource(node.get("psource").asText());
		points.setPoints(node.get("points").asDouble());
		points.setStatus("Active");
		this.pointsRepository.save(points);

		return "success";
	}
	
	@PutMapping
	public String editPoints(@RequestBody ObjectNode node) {
		String pid = node.get("pid").asText();
		Criteria cre = em.unwrap(Session.class).createCriteria(Points.class);
		cre.add(Restrictions.eq("id", Long.valueOf(pid)));
		Points points= (Points) cre.uniqueResult();
		points.setPoints(node.get("points").asDouble());
		points.setStatus("Active");
		this.pointsRepository.save(points);

		return "success";
	}
	
	@GetMapping
	public List<Points> getPoints() {
		return this.pointsRepository.findAll();

	}
	
	@GetMapping("/media/{source}")
	public String getPointsBySource(@PathVariable(value = "source") String source) {
		
		Criteria cr = em.unwrap(Session.class).createCriteria(Points.class);

		double maxpoints=0;
		if (source.equals("social")) {
			cr.add(Restrictions.ne("pointSource", "Profile Completion"));
			cr.add(Restrictions.ne("pointSource", "Video Upload"));
			cr.add(Restrictions.ne("pointSource", "Referal"));
			cr.add(Restrictions.ne("pointSource", "Youtube Video Watch"));
			if (!cr.list().isEmpty()) {
				List<Points> list = cr.list();
				for (Points points : list) {
					if (points.getPoints()>maxpoints) {
						maxpoints=points.getPoints();
					}
				}
			}
		}else if(source.equals("Profile Completion")) {
			cr.add(Restrictions.eq("pointSource", "Profile Completion"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Video Upload")) {
			cr.add(Restrictions.eq("pointSource", "Video Upload"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Referal")) {
			cr.add(Restrictions.eq("pointSource", "Referal"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Youtube Video Watch")) {
			cr.add(Restrictions.eq("pointSource", "Youtube Video Watch"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Youtube Subscribe")) {
			cr.add(Restrictions.eq("pointSource", "Youtube Subscribe"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Facebook Page Like")) {
			cr.add(Restrictions.eq("pointSource", "Facebook Page Like"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Facebook Post Like")) {
			cr.add(Restrictions.eq("pointSource", "Facebook Post Like"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Facebook Post Share")) {
			cr.add(Restrictions.eq("pointSource", "Facebook Post Share"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Instagram Followers")) {
			cr.add(Restrictions.eq("pointSource", "Instagram Followers"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Twitter Followers")) {
			cr.add(Restrictions.eq("pointSource", "Twitter Followers"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Tiktok Followers")) {
			cr.add(Restrictions.eq("pointSource", "Tiktok Followers"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Servey Fill")) {
			cr.add(Restrictions.eq("pointSource", "Servey Fill"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}else if(source.equals("Website Views")) {
			cr.add(Restrictions.eq("pointSource", "Website Views"));
			Points p=(Points) cr.uniqueResult();
			if (p.getPoints()>maxpoints) {
				maxpoints=p.getPoints();
			}
		}
		return String.valueOf(maxpoints);
	}
	
	@GetMapping("/max/daily")
	public String getMaxPoints() {
		Criteria cr = em.unwrap(Session.class).createCriteria(DailyEarnLimit.class);
		cr.add(Restrictions.eq("type", "Daily Limit"));
		if (cr.list().isEmpty()) {
			return "0";
		}else {
			DailyEarnLimit limit=(DailyEarnLimit) cr.uniqueResult();
			return String.valueOf(limit.getLimit());
		}
	}
	
	@GetMapping("/max/payout")
	public String getPayoutPoints() {
		Criteria cr = em.unwrap(Session.class).createCriteria(DailyEarnLimit.class);
		cr.add(Restrictions.eq("type", "Payout Limit"));
		if (cr.list().isEmpty()) {
			return "0";
		}else {
			DailyEarnLimit limit=(DailyEarnLimit) cr.uniqueResult();
			return String.valueOf(limit.getLimit());
		}
	}
	
	@PostMapping("/max")
	public String setMaxPoints(@RequestBody ObjectNode node) {
		String dailypoint = node.get("point").asText();
		Criteria cr = em.unwrap(Session.class).createCriteria(DailyEarnLimit.class);
		cr.add(Restrictions.eq("type", "Daily Limit"));
//		cr.add(Restrictions.eq("limit", Double.valueOf(dailypoint)));
		if (cr.list().isEmpty()) {
			DailyEarnLimit limit=new DailyEarnLimit();
			limit.setLimit(Double.valueOf(dailypoint));
			limit.setType("Daily Limit");
			this.dailyrepo.save(limit);
			return dailypoint;
		}else {
			DailyEarnLimit limit=(DailyEarnLimit) cr.uniqueResult();
			limit.setLimit(Double.valueOf(dailypoint));
			this.dailyrepo.save(limit);
			return dailypoint;
		}
	}
	
	@PostMapping("/paylimit")
	public String setPayoutLimit(@RequestBody ObjectNode node) {
		String dailypoint = node.get("point").asText();
		Criteria cr = em.unwrap(Session.class).createCriteria(DailyEarnLimit.class);
		cr.add(Restrictions.eq("type", "Payout Limit"));
//		cr.add(Restrictions.eq("dailylimit", Double.valueOf(dailypoint)));
		if (cr.list().isEmpty()) {
			DailyEarnLimit limit=new DailyEarnLimit();
			limit.setLimit(Double.valueOf(dailypoint));
			limit.setType("Payout Limit");
			this.dailyrepo.save(limit);
			return dailypoint;
		}else {
			DailyEarnLimit limit=(DailyEarnLimit) cr.uniqueResult();
			limit.setLimit(Double.valueOf(dailypoint));
			this.dailyrepo.save(limit);
			return dailypoint;
		}
	}

	@GetMapping("/{id}/{type}")
	public String getEarningSummery(@PathVariable(value = "id") long userid,
			@PathVariable(value = "type") String type) {
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", Long.valueOf(userid)));
		User user = (User) cr.uniqueResult();
		double total_points=0;
		if (type.equals("all")) {
			Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cre.add(Restrictions.eq("user", user));
			cre.add(Restrictions.eq("status", "Active"));
			List<UserPoints> list = cre.list();
			for (UserPoints up : list) {
				total_points+=up.getPoints();
			}
		}else if (type.equals("social")) {
			Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cre.add(Restrictions.eq("user", user));
			cre.add(Restrictions.eq("status", "Active"));
			cre.add(Restrictions.ne("pointSource", "Referals"));
			cre.add(Restrictions.ne("pointSource", "Youtube Video Watch"));
			cre.add(Restrictions.ne("pointSource", "Video Upload"));
			cre.add(Restrictions.ne("pointSource", "Profile Completion"));
			List<UserPoints> list = cre.list();
			for (UserPoints up : list) {
				total_points+=up.getPoints();
			}
		}else if (type.equals("video")) {
			Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cre.add(Restrictions.eq("user", user));
			cre.add(Restrictions.eq("status", "Active"));
			cre.add(Restrictions.eq("pointSource", "Youtube Video Watch"));
			List<UserPoints> list = cre.list();
			for (UserPoints up : list) {
				total_points+=up.getPoints();
			}
		}else if (type.equals("other")) {
			Criteria cr1 = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr1.add(Restrictions.eq("user", user));
			cr1.add(Restrictions.eq("status", "Active"));
			cr1.add(Restrictions.eq("pointSource", "Video Upload"));
			List<UserPoints> v_list = cr1.list();
			for (UserPoints up : v_list) {
				total_points+=up.getPoints();
			}
			Criteria cr2 = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr2.add(Restrictions.eq("user", user));
			cr2.add(Restrictions.eq("status", "Active"));
			cr2.add(Restrictions.eq("pointSource", "Referal"));
			List<UserPoints> r_list = cr2.list();
			for (UserPoints up : r_list) {
				total_points+=up.getPoints();
			}
			Criteria cr3 = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr3.add(Restrictions.eq("user", user));
			cr3.add(Restrictions.eq("status", "Active"));
			cr3.add(Restrictions.eq("pointSource", "Profile Completion"));
			List<UserPoints> p_list = cr3.list();
			for (UserPoints up : p_list) {
				total_points+=up.getPoints();
			}
		}
		double round_total = total_points*0.003;
		DecimalFormat df = new DecimalFormat("####0.00");
		return "$"+df.format(round_total);
	}
	
	@GetMapping("/{id}/limit")
	public String getEarnPercentage(@PathVariable(value = "id") long userid) {
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", Long.valueOf(userid)));
		User user = (User) cr.uniqueResult();
		double total_points=0;
		
		Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
		cre.add(Restrictions.eq("user", user));
		cre.add(Restrictions.eq("status", "Active"));
		List<UserPoints> list = cre.list();
		for (UserPoints up : list) {
			total_points+=up.getPoints();
		}
		double round_total = total_points*0.003;
		double percent=(round_total/10)*100;
		DecimalFormat df = new DecimalFormat("####0.0");
		
		return "You've reached "+df.format(percent)+"% of payment threshold";
	}
}
