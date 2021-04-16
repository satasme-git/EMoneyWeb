package satasme.promo.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.EarningResponse;
import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.PriceofQuestion;
import satasme.promo.web.entity.Servey;
import satasme.promo.web.entity.ServeyAnswers;
import satasme.promo.web.entity.ServeyQuestions;
import satasme.promo.web.entity.SocialEngagementResponse;
import satasme.promo.web.exceptions.ResourceNotFoundException;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserEarningResponse;
import satasme.promo.web.entity.UserOtherEngagement;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.entity.UserSocialEngagement;
import satasme.promo.web.repository.DailyEarnLimitRepository;
import satasme.promo.web.repository.PointsRepository;
import satasme.promo.web.repository.PriceofQuestionRepository;
import satasme.promo.web.repository.ServeyAnswerRepository;
import satasme.promo.web.repository.ServeyQuestionRepository;
import satasme.promo.web.repository.ServeyRepository;
import satasme.promo.web.repository.UserOtherEngagementRepository;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/servey")
public class ServeyController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ServeyRepository serveyRepository;
	@Autowired
	private PriceofQuestionRepository priceofQuestionRepository;
	@Autowired
	private ServeyQuestionRepository serveyQuestionRepository;
	@Autowired
	private ServeyAnswerRepository serveyAnswerRepository;
	@Autowired
	private UserOtherEngagementRepository userEngagementRepository;
	@Autowired
	private UserPointsRepository userPointsRepository;
	@PersistenceContext
	protected EntityManager em;

	@PostMapping
	public String saveQuestions(@RequestBody ObjectNode node) {
		Criteria cr2 = em.unwrap(Session.class).createCriteria(User.class);
		cr2.add(Restrictions.eq("id", Long.valueOf(node.get("user").asText())));
		User crruser = (User) cr2.uniqueResult();

		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("id", Long.valueOf(node.get("serveyid").asText())));
		if (node.get("type").asText().equals("yesno")) {

			if (node.get("question").asText().isEmpty()) {
				return "failed";
			} else {
				if (crs.list().isEmpty()) {
					String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
					Servey servey = new Servey();
					servey.setId(Long.valueOf(node.get("serveyid").asText()));
					servey.setUser(crruser);
					servey.setAddedDate(crrdate);
					servey.setStatus("editing");
					this.serveyRepository.save(servey);

					ServeyQuestions servques = new ServeyQuestions();
					servques.setServey(servey);
					servques.setQuestion(node.get("question").asText());
					servques.setQtype(node.get("type").asText());
					servques.setStatus("pending");
					this.serveyQuestionRepository.save(servques);
					return "success";
				} else {
					Servey servey = (Servey) crs.uniqueResult();
					Criteria crq = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
					crq.add(Restrictions.eq("servey", servey));
					crq.add(Restrictions.eq("question", node.get("question").asText()));
					if (crq.list().isEmpty()) {
						ServeyQuestions servques = new ServeyQuestions();
						servques.setServey(servey);
						servques.setQuestion(node.get("question").asText());
						servques.setQtype(node.get("type").asText());
						servques.setStatus("pending");
						this.serveyQuestionRepository.save(servques);
						return "success";
					} else {
						return "exist";
					}

				}

			}
		} else if (node.get("type").asText().equals("single") || node.get("type").asText().equals("multiple")) {
			if (node.get("question").asText().isEmpty()) {
				return "empty";
			} else if (node.get("ans1").asText().isEmpty() || node.get("ans2").asText().isEmpty()
					|| node.get("ans3").asText().isEmpty() || node.get("ans4").asText().isEmpty()
					|| node.get("ans5").asText().isEmpty()) {
				return "empty";
			} else {

				String ans1 = node.get("ans1").asText();
				String ans2 = node.get("ans2").asText();
				String ans3 = node.get("ans3").asText();
				String ans4 = node.get("ans4").asText();
				String ans5 = node.get("ans5").asText();
				if (crs.list().isEmpty()) {
					String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
					Servey servey = new Servey();
					servey.setId(Long.valueOf(node.get("serveyid").asText()));
					servey.setUser(crruser);
					servey.setAddedDate(crrdate);
					servey.setStatus("editing");
					this.serveyRepository.save(servey);

					ServeyQuestions servques = new ServeyQuestions();
					servques.setServey(servey);
					servques.setQuestion(node.get("question").asText());
					servques.setAnswers(ans1 + "~" + ans2 + "~" + ans3 + "~" + ans4 + "~" + ans5);
					servques.setQtype(node.get("type").asText());
					servques.setStatus("pending");
					this.serveyQuestionRepository.save(servques);
					return "success";
				} else {
					Servey servey = (Servey) crs.uniqueResult();
					Criteria crq = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
					crq.add(Restrictions.eq("servey", servey));
					crq.add(Restrictions.eq("question", node.get("question").asText()));
					if (crq.list().isEmpty()) {
						ServeyQuestions servques = new ServeyQuestions();
						servques.setServey(servey);
						servques.setQuestion(node.get("question").asText());
						servques.setAnswers(ans1 + "~" + ans2 + "~" + ans3 + "~" + ans4 + "~" + ans5);
						servques.setQtype(node.get("type").asText());
						servques.setStatus("pending");
						this.serveyQuestionRepository.save(servques);
						return "success";
					} else {
						return "exist";
					}

				}

			}

		} else if (node.get("type").asText().equals("essay")) {

			if (node.get("question").asText().isEmpty()) {
				return "failed";
			} else {
				if (crs.list().isEmpty()) {
					String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
					Servey servey = new Servey();
					servey.setId(Long.valueOf(node.get("serveyid").asText()));
					servey.setUser(crruser);
					servey.setAddedDate(crrdate);
					servey.setStatus("editing");
					this.serveyRepository.save(servey);

					ServeyQuestions servques = new ServeyQuestions();
					servques.setServey(servey);
					servques.setQuestion(node.get("question").asText());
					servques.setQtype(node.get("type").asText());
					servques.setStatus("pending");
					this.serveyQuestionRepository.save(servques);
					return "success";
				} else {
					Servey servey = (Servey) crs.uniqueResult();
					Criteria crq = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
					crq.add(Restrictions.eq("servey", servey));
					crq.add(Restrictions.eq("question", node.get("question").asText()));
					if (crq.list().isEmpty()) {
						ServeyQuestions servques = new ServeyQuestions();
						servques.setServey(servey);
						servques.setQuestion(node.get("question").asText());
						servques.setQtype(node.get("type").asText());
						servques.setStatus("pending");
						this.serveyQuestionRepository.save(servques);
						return "success";
					} else {
						return "exist";
					}

				}

			}
		} else {
			return "success";
		}
	}

	@DeleteMapping("/{serveyid}/{question}")
	public String deleteQuestions(@PathVariable Long serveyid, @PathVariable String question) {
		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("id", serveyid));

		Servey servey = (Servey) crs.uniqueResult();
		Criteria crq = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
		crq.add(Restrictions.eq("servey", servey));
		crq.add(Restrictions.eq("question", question));
		if (crq.list().isEmpty()) {
			return "not found";
		} else {
			ServeyQuestions serveyQuestions = (ServeyQuestions) crq.uniqueResult();
			serveyQuestionRepository.deleteById(serveyQuestions.getId());
			return "deleted";
		}

	}

	@PostMapping("/complete")
	public String completeQuestions(@RequestBody ObjectNode node) {
		Criteria cr2 = em.unwrap(Session.class).createCriteria(User.class);
		cr2.add(Restrictions.eq("id", Long.valueOf(node.get("user").asText())));
		User crruser = (User) cr2.uniqueResult();

		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("id", Long.valueOf(node.get("serveyid").asText())));
		if (!crs.list().isEmpty()) {
			Servey servey = (Servey) crs.uniqueResult();
			servey.setStatus("payed");
			this.serveyRepository.save(servey);
			return "success";
		} else {
			return "failed";
		}

	}

	@GetMapping("/{serveyno}/{price}")
	public double getServeyPrice(@PathVariable(value = "serveyno") String serveyno,
			@PathVariable(value = "price") Double price) {
		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("id", Long.valueOf(serveyno)));
		Servey servey = (Servey) crs.uniqueResult();

		Criteria crq = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
		crq.add(Restrictions.eq("servey", servey));
		int sq_size = crq.list().size();
		Criteria crpk = em.unwrap(Session.class).createCriteria(PriceofQuestion.class);
		PriceofQuestion poq = (PriceofQuestion) crpk.uniqueResult();
		double qprice = poq.getPrice() * sq_size;
		qprice = qprice + price;

		return qprice;

	}

	@PostMapping("/qprice")
	public String saveQprice(@RequestBody ObjectNode node) {
		Criteria crpk = em.unwrap(Session.class).createCriteria(PriceofQuestion.class);

		if (crpk.list().isEmpty()) {
			PriceofQuestion poq = new PriceofQuestion();
			poq.setPrice(node.get("price").asDouble());
			priceofQuestionRepository.save(poq);
		} else {
			PriceofQuestion poq = (PriceofQuestion) crpk.uniqueResult();
			poq.setPrice(node.get("price").asDouble());
			priceofQuestionRepository.save(poq);
		}
		return "Successfully Updated ";
	}

	@GetMapping("/qprice")
	public double getQPrice() {
		Criteria crpk = em.unwrap(Session.class).createCriteria(PriceofQuestion.class);
		PriceofQuestion poq = (PriceofQuestion) crpk.uniqueResult();
		return poq.getPrice();

	}

	@GetMapping("/history")
	public List<EarningResponse> getHistory() {
		List<EarningResponse> erlist = new ArrayList<>();
		Criteria crpk = em.unwrap(Session.class).createCriteria(Servey.class);
		crpk.add(Restrictions.eq("status", "approved"));
		if (!crpk.list().isEmpty()) {
			List<Servey> olist = crpk.list();
			for (Servey servey : olist) {
				Criteria cr = em.unwrap(Session.class).createCriteria(UserOtherEngagement.class);
				String service = "Servey Fill";

				cr.add(Restrictions.eq("service", service));
				cr.add(Restrictions.eq("servey", servey));
				List<UserOtherEngagement> uelist = cr.list();
				int ototal = 0;
				for (UserOtherEngagement ue : uelist) {
					ototal++;
				}
				EarningResponse er = new EarningResponse();

				er.setUrl(servey.getAddedDate());
				er.setCount("" + ototal);
				er.setService(service);
				erlist.add(er);

			}
			return erlist;
		} else {
			EarningResponse er = new EarningResponse();
			er.setCount("0");
			er.setUrl("");
			er.setService("");
			return erlist;
		}
	}

	@GetMapping("/history/user")
	public List<UserEarningResponse> getHistoryByUser() {
		List<UserEarningResponse> erlist = new ArrayList<>();
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		List<User> u_list = cr.list();
		for (User user : u_list) {
			Criteria crup = em.unwrap(Session.class).createCriteria(UserPoints.class);
			crup.add(Restrictions.eq("user", user));
			crup.add(Restrictions.eq("pointSource", "Servey Fill"));
			double total_points = 0;
			if (!crup.list().isEmpty()) {
				List<UserPoints> up_list = crup.list();
				for (UserPoints up : up_list) {
					total_points += up.getPoints();
				}
			}
			if (total_points != 0) {
				UserEarningResponse uer = new UserEarningResponse();
				uer.setEarning(String.valueOf(total_points));
				uer.setEmail(user.getEmail());
				uer.setFname(user.getFname());
				uer.setLname(user.getLname());
				erlist.add(uer);
			}
		}

		return erlist;
	}

	@GetMapping("/qcount/{serveyno}")
	public int getQCount(@PathVariable(value = "serveyno") String serveyno) {
		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("id", Long.valueOf(serveyno)));
		Servey servey = (Servey) crs.uniqueResult();

		Criteria crq = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
		crq.add(Restrictions.eq("servey", servey));
		int sq_size = crq.list().size();

		return sq_size;
	}

	@GetMapping("/pending")
	public List<Servey> getPendingServey() {

		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("status", "payed"));
		List<Servey> s_list = crs.list();

		return s_list;
	}

	@GetMapping("/pendingquestions")
	public List<ServeyQuestions> getPendingServeyQuestions() {

//		List<ServeyQuestions> s_list = new ArrayList<>();
//
//		Criteria crp = em.unwrap(Session.class).createCriteria(Servey.class);
//		crp.add(Restrictions.eq("status", "payed"));
//		List<Servey> p_list = crp.list();
//
//		for (Servey servey : p_list) {
//			Criteria crs = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
//			crs.add(Restrictions.eq("servey", servey));
//			ServeyQuestions sq = (ServeyQuestions) crs.uniqueResult();
//			s_list.add(sq);
//		}

		Criteria crs = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
		List<ServeyQuestions> s_list = crs.list();

		return s_list;
	}

	@GetMapping("/approve/{serveyid}")
	public String approveServey(@PathVariable(value = "serveyid") Long serveyid) {
		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("id", serveyid));
		Servey servey = (Servey) crs.uniqueResult();
		servey.setStatus("approved");
		this.serveyRepository.save(servey);

		return "Successfully Deleted ";
	}

	@GetMapping("/delete/{serveyid}")
	public String deleteServey(@PathVariable(value = "serveyid") Long serveyid) {
		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("id", serveyid));
		Servey servey = (Servey) crs.uniqueResult();
		servey.setStatus("deleted");
		this.serveyRepository.save(servey);

		return "Successfully Deleted ";
	}

	@GetMapping("/load/{serveyid}")
	public List<ServeyQuestions> getServeyById(@PathVariable(value = "serveyid") Long serveyid) {
		Servey servey = this.serveyRepository.findById(serveyid)
				.orElseThrow(() -> new ResourceNotFoundException("Servey not found with id:" + serveyid));
		Criteria crs = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
		crs.add(Restrictions.eq("servey", servey));
		List<ServeyQuestions> sq = crs.list();
		return sq;
	}

	@GetMapping("/loadcount/{serveyid}")
	public int getQuestionCount(@PathVariable(value = "serveyid") Long serveyid) {
		Servey servey = this.serveyRepository.findById(serveyid)
				.orElseThrow(() -> new ResourceNotFoundException("Servey not found with id:" + serveyid));
		Criteria crs = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
		crs.add(Restrictions.eq("servey", servey));
		int size = crs.list().size();
		return size;
	}

	@GetMapping("/saveanswer/{servey_id}/{question_id}/{user}/{answers}")
	public String saveAnswers(@PathVariable("servey_id") String servey_id, @PathVariable("user") Long userid,
			@PathVariable("question_id") Long question_id, @PathVariable("answers") String getanswers) {
		Servey servey = this.serveyRepository.findById(Long.valueOf(servey_id))
				.orElseThrow(() -> new ResourceNotFoundException("Servey not found with id:" + servey_id));
		User user = this.userRepository.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		Criteria crs = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
		crs.add(Restrictions.eq("servey", servey));
		crs.add(Restrictions.eq("id", question_id));
		ServeyQuestions serveyQuestions = (ServeyQuestions) crs.uniqueResult();
		ServeyAnswers answers = new ServeyAnswers();
		answers.setAnswers(getanswers);
		answers.setServey(servey);
		answers.setServeyq(serveyQuestions);
		answers.setUser(user);
		this.serveyAnswerRepository.save(answers);

		return "Successfully Updated ";
	}

	@GetMapping("/redeempoints/{servey_id}/{question_id}/{user}/{answers}")
	public String redeemPoints(@PathVariable("servey_id") String servey_id, @PathVariable("user") Long userid,
			@PathVariable("question_id") Long question_id, @PathVariable("answers") String getanswers) {
		Servey servey = this.serveyRepository.findById(Long.valueOf(servey_id))
				.orElseThrow(() -> new ResourceNotFoundException("Servey not found with id:" + servey_id));
		User user = this.userRepository.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		Criteria crs = em.unwrap(Session.class).createCriteria(ServeyQuestions.class);
		crs.add(Restrictions.eq("servey", servey));
		crs.add(Restrictions.eq("id", question_id));
		ServeyQuestions serveyQuestions = (ServeyQuestions) crs.uniqueResult();
		ServeyAnswers answers = new ServeyAnswers();
		answers.setAnswers(getanswers);
		answers.setServey(servey);
		answers.setServeyq(serveyQuestions);
		answers.setUser(user);
		this.serveyAnswerRepository.save(answers);

		String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
		UserOtherEngagement engagement = new UserOtherEngagement();
		engagement.setDate(crrdate);
		engagement.setServey(servey);
		engagement.setUser(user);
		engagement.setService("Servey Fill");
		this.userEngagementRepository.save(engagement);

		Criteria cr = em.unwrap(Session.class).createCriteria(Points.class);
		cr.add(Restrictions.eq("pointSource", "Servey Fill"));
		Points points = (Points) cr.uniqueResult();

		UserPoints userPoints = new UserPoints();
		userPoints.setPoints(points.getPoints());
		userPoints.setPointSource("Servey Fill");
		userPoints.setDate(crrdate);
		userPoints.setStatus("Active");
		userPoints.setUser(user);
		this.userPointsRepository.save(userPoints);

		return "Successfully Updated ";
	}

	@GetMapping("/serveylist/{user}")
	public List<SocialEngagementResponse> getServeyList(@PathVariable(value = "user") Long userid) {
		User user = this.userRepository.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("status", "approved"));
		List<Servey> serveys = crs.list();

		Criteria cre = em.unwrap(Session.class).createCriteria(UserOtherEngagement.class);
		cre.add(Restrictions.eq("user", user));
		List<SocialEngagementResponse> engagementByUser = new ArrayList();

		for (Servey servey : serveys) {
			boolean found = false;
			SocialEngagementResponse response = new SocialEngagementResponse();
			if (!cre.list().isEmpty()) {
				List<UserOtherEngagement> findAllengagements = cre.list();
				for (UserOtherEngagement engagement : findAllengagements) {
					if (engagement.getServey().getId() == servey.getId()) {
						found = true;
						response.setStatus("Liked");
					}
				}
			}
			if (!found) {
				response.setStatus("Like");
			}
			response.setid(String.valueOf(servey.getId()));
			engagementByUser.add(response);
		}

		return engagementByUser;
	}
}
