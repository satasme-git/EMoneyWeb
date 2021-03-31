package satasme.promo.web.controller;

import java.text.SimpleDateFormat;
import java.time.YearMonth;
import java.time.format.TextStyle;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.collections4.map.HashedMap;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import satasme.promo.web.entity.DailyEarnLimit;
import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.SocialEngagementResponse;
import satasme.promo.web.entity.TopUsersResponse;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.entity.UserStaticResponse;
import satasme.promo.web.entity.VideoUpload;
import satasme.promo.web.repository.OrdersRepository;
import satasme.promo.web.repository.UploadVideoRepository;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {
	@Autowired
	private UserRepository userRepository;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserPointsRepository userPointsRepository;
	@Autowired
	private OrdersRepository ordersRepository;
	@Autowired
	private UploadVideoRepository uploadVideoRepository;

	@GetMapping("/totalusers")
	public int getallUsersCount() {
		List<User> u_list = this.userRepository.findAll();
		return u_list.size();
	}

	@GetMapping("/totalorders")
	public int getallOrdersCount() {
		List<Orders> o_list = this.ordersRepository.findAll();
		return o_list.size();
	}

	@GetMapping("/pendingorders")
	public int getpendingOrdersCount() {
		Criteria cr = em.unwrap(Session.class).createCriteria(Orders.class);
		cr.add(Restrictions.eq("status", "pending release"));
		return cr.list().size();
	}

	@GetMapping("/pendingvideos")
	public int getpendingVideosCount() {
		Criteria cr = em.unwrap(Session.class).createCriteria(VideoUpload.class);
		cr.add(Restrictions.eq("status", "Pending"));
		return cr.list().size();
	}

	@GetMapping("/userstatics")
	public UserStaticResponse getUserStatics() {
		UserStaticResponse usresp=new UserStaticResponse();
		try {
			List<String> allDates = new ArrayList<>();
			List<String> allusercount = new ArrayList<>();
			for (int i = 11; i >= 0; i--) {
				YearMonth date = YearMonth.now().minusMonths(i);
				String monthName = date.getMonth().getDisplayName(TextStyle.SHORT, Locale.ENGLISH);
				allDates.add(monthName);
				
//				System.out.println(date.getYear()+"-"+String.format("%02d", date.getMonth().getValue()));
				Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
				cr.add(Restrictions.like("regdate", date.getYear()+"-"+String.format("%02d", date.getMonth().getValue()),MatchMode.ANYWHERE));
				allusercount.add(""+cr.list().size());
			}
			usresp.setMonths(allDates);
			usresp.setUsage(allusercount);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return usresp;
	}
	
	@GetMapping("/earningimpression")
	public UserStaticResponse getEarningImpression() {
		UserStaticResponse usresp=new UserStaticResponse();
		
		List<String> allpsource = new ArrayList<>();
		List<String> allclickcount = new ArrayList<>();
		Criteria cr2 = em.unwrap(Session.class).createCriteria(Points.class);
		List<Points> p_list = cr2.list();
		for (Points points : p_list) {
			Criteria cr = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr.add(Restrictions.eq("pointSource", points.getPointSource()));
			List<UserPoints> up_list = cr.list();
			int count=0;
			String shortPsource="";
			for (UserPoints up : up_list) {
				count++;
			}
			String[] split = points.getPointSource().split(" ");
			for (int i = 0; i < split.length; i++) {
				shortPsource+=split[i].substring(0, 1);
			}
			allpsource.add(shortPsource);
			allclickcount.add(""+count);
		}
		usresp.setMonths(allpsource);
		usresp.setUsage(allclickcount);
		return usresp;
	}
	
	public static Map<String, Double> sortByValue(final Map<String, Double> wordCounts) {

        return wordCounts.entrySet()
                .stream()
                .sorted((Map.Entry.<String, Double>comparingByValue().reversed()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));
    }
	
	@GetMapping("/topusers")
	public List<TopUsersResponse> getTopUsers() {
		List<TopUsersResponse> list_usresp=new ArrayList<>();
		Map<String, Double> totals_list = new HashedMap<>(); 
		
		Criteria cru = em.unwrap(Session.class).createCriteria(User.class);
		List<User> u_list = cru.list();
		
		for (User user : u_list) {
			Criteria crp = em.unwrap(Session.class).createCriteria(UserPoints.class);
			crp.add(Restrictions.eq("user", user));
			List<UserPoints> p_list = crp.list();
			double total=0;
			for (UserPoints up : p_list) {
				total+=up.getPoints();
			}
			try {
				Double.parseDouble(user.getEmail());
				totals_list.put("Social Login", total);
			} catch (Exception e) {
				
				totals_list.put(user.getEmail(), total);
			}
			
			
		}
		final Map<String, Double> sortedByCount = sortByValue(totals_list);
		int loop=0;
		for (Map.Entry<String, Double> entry : sortedByCount.entrySet()) {
			if(list_usresp.size()<=10) {
				TopUsersResponse usresp=new TopUsersResponse();
				usresp.setEarn(String.valueOf(entry.getValue()));
				usresp.setEmail(entry.getKey());
				list_usresp.add(usresp);
			}
		};
		return list_usresp;
	}
	
	@GetMapping("/orderimpression")
	public UserStaticResponse getOrderImpression() {
		UserStaticResponse usresp=new UserStaticResponse();
		
		List<String> allpsource = new ArrayList<>();
		List<String> allclickcount = new ArrayList<>();
		Criteria cr1 = em.unwrap(Session.class).createCriteria(Points.class);
		cr1.add(Restrictions.like("pointSource", "Youtube",MatchMode.ANYWHERE));
		List<Points> p_list1 = cr1.list();
		int count1=0;
		for (Points points : p_list1) {
			Criteria cr = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr.add(Restrictions.eq("pointSource", points.getPointSource()));
			List<UserPoints> up_list = cr.list();
			
			String shortPsource="";
			for (UserPoints up : up_list) {
				count1++;
			}
			String[] split = points.getPointSource().split(" ");
			for (int i = 0; i < split.length; i++) {
				shortPsource+=split[i].substring(0, 1);
			}
			
		}
		allpsource.add("Youtube");
		allclickcount.add(""+count1);
		
		Criteria cr2 = em.unwrap(Session.class).createCriteria(Points.class);
		cr2.add(Restrictions.like("pointSource", "Facebook",MatchMode.ANYWHERE));
		List<Points> p_list2 = cr2.list();
		int count2=0;
		for (Points points : p_list2) {
			Criteria cr = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr.add(Restrictions.eq("pointSource", points.getPointSource()));
			List<UserPoints> up_list = cr.list();
			String shortPsource="";
			for (UserPoints up : up_list) {
				count2++;
			}
			String[] split = points.getPointSource().split(" ");
			for (int i = 0; i < split.length; i++) {
				shortPsource+=split[i].substring(0, 1);
			}
		}
		allpsource.add("Facebook");
		allclickcount.add(""+count2);
		
		Criteria cr3 = em.unwrap(Session.class).createCriteria(Points.class);
		cr3.add(Restrictions.like("pointSource", "Instagram",MatchMode.ANYWHERE));
		List<Points> p_list3 = cr3.list();
		int count3=0;
		for (Points points : p_list3) {
			Criteria cr = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr.add(Restrictions.eq("pointSource", points.getPointSource()));
			List<UserPoints> up_list = cr.list();
			String shortPsource="";
			for (UserPoints up : up_list) {
				count3++;
			}
			String[] split = points.getPointSource().split(" ");
			for (int i = 0; i < split.length; i++) {
				shortPsource+=split[i].substring(0, 1);
			}
		}
		allpsource.add("Instagram");
		allclickcount.add(""+count3);
		
		Criteria cr4 = em.unwrap(Session.class).createCriteria(Points.class);
		cr4.add(Restrictions.like("pointSource", "Twitter",MatchMode.ANYWHERE));
		List<Points> p_list4 = cr4.list();
		int count4=0;
		for (Points points : p_list4) {
			Criteria cr = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr.add(Restrictions.eq("pointSource", points.getPointSource()));
			List<UserPoints> up_list = cr.list();
			String shortPsource="";
			for (UserPoints up : up_list) {
				count4++;
			}
			String[] split = points.getPointSource().split(" ");
			for (int i = 0; i < split.length; i++) {
				shortPsource+=split[i].substring(0, 1);
			}
		}
		allpsource.add("Twitter");
		allclickcount.add(""+count4);
		
		Criteria cr5 = em.unwrap(Session.class).createCriteria(Points.class);
		cr5.add(Restrictions.like("pointSource", "Tiktok",MatchMode.ANYWHERE));
		List<Points> p_list5 = cr5.list();
		int count5=0;
		for (Points points : p_list5) {
			Criteria cr = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr.add(Restrictions.eq("pointSource", points.getPointSource()));
			List<UserPoints> up_list = cr.list();
			String shortPsource="";
			for (UserPoints up : up_list) {
				count5++;
			}
			String[] split = points.getPointSource().split(" ");
			for (int i = 0; i < split.length; i++) {
				shortPsource+=split[i].substring(0, 1);
			}
		}
		allpsource.add("Tiktok");
		allclickcount.add(""+count5);
		
		usresp.setMonths(allpsource);
		usresp.setUsage(allclickcount);
		return usresp;
	}
}
