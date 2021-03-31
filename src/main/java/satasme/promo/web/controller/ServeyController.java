package satasme.promo.web.controller;

import java.text.SimpleDateFormat;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.PriceofQuestion;
import satasme.promo.web.entity.Servey;
import satasme.promo.web.entity.YesNoServeyQuestions;
import satasme.promo.web.entity.User;
import satasme.promo.web.repository.DailyEarnLimitRepository;
import satasme.promo.web.repository.PointsRepository;
import satasme.promo.web.repository.PriceofQuestionRepository;
import satasme.promo.web.repository.ServeyQuestionRepository;
import satasme.promo.web.repository.ServeyRepository;
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

					YesNoServeyQuestions servques = new YesNoServeyQuestions();
					servques.setServey(servey);
					servques.setQuestion(node.get("question").asText());
					servques.setQtype(node.get("type").asText());
					servques.setStatus("pending");
					this.serveyQuestionRepository.save(servques);
					return "success";
				} else {
					Servey servey = (Servey) crs.uniqueResult();
					Criteria crq = em.unwrap(Session.class).createCriteria(YesNoServeyQuestions.class);
					crq.add(Restrictions.eq("servey", servey));
					crq.add(Restrictions.eq("question", node.get("question").asText()));
					if (crq.list().isEmpty()) {
						YesNoServeyQuestions servques = new YesNoServeyQuestions();
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
			System.out.println("aaaaaaaa");
			System.out.println("bbbbbbbbbbbbbbb");
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

					YesNoServeyQuestions servques = new YesNoServeyQuestions();
					servques.setServey(servey);
					servques.setQuestion(node.get("question").asText());
					servques.setAnswers(ans1 + "~" + ans2 + "~" + ans3 + "~" + ans4 + "~" + ans5);
					servques.setQtype(node.get("type").asText());
					servques.setStatus("pending");
					this.serveyQuestionRepository.save(servques);
					return "success";
				} else {
					Servey servey = (Servey) crs.uniqueResult();
					Criteria crq = em.unwrap(Session.class).createCriteria(YesNoServeyQuestions.class);
					crq.add(Restrictions.eq("servey", servey));
					crq.add(Restrictions.eq("question", node.get("question").asText()));
					if (crq.list().isEmpty()) {
						YesNoServeyQuestions servques = new YesNoServeyQuestions();
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

					YesNoServeyQuestions servques = new YesNoServeyQuestions();
					servques.setServey(servey);
					servques.setQuestion(node.get("question").asText());
					servques.setQtype(node.get("type").asText());
					servques.setStatus("pending");
					this.serveyQuestionRepository.save(servques);
					return "success";
				} else {
					Servey servey = (Servey) crs.uniqueResult();
					Criteria crq = em.unwrap(Session.class).createCriteria(YesNoServeyQuestions.class);
					crq.add(Restrictions.eq("servey", servey));
					crq.add(Restrictions.eq("question", node.get("question").asText()));
					if (crq.list().isEmpty()) {
						YesNoServeyQuestions servques = new YesNoServeyQuestions();
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
		Criteria crq = em.unwrap(Session.class).createCriteria(YesNoServeyQuestions.class);
		crq.add(Restrictions.eq("servey", servey));
		crq.add(Restrictions.eq("question", question));
		if (crq.list().isEmpty()) {
			return "not found";
		} else {
			YesNoServeyQuestions serveyQuestions = (YesNoServeyQuestions) crq.uniqueResult();
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

		Criteria crq = em.unwrap(Session.class).createCriteria(YesNoServeyQuestions.class);
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
	
	@GetMapping("/qcount/{serveyno}")
	public int getQCount(@PathVariable(value = "serveyno") String serveyno) {
		Criteria crs = em.unwrap(Session.class).createCriteria(Servey.class);
		crs.add(Restrictions.eq("id", Long.valueOf(serveyno)));
		Servey servey = (Servey) crs.uniqueResult();

		Criteria crq = em.unwrap(Session.class).createCriteria(YesNoServeyQuestions.class);
		crq.add(Restrictions.eq("servey", servey));
		int sq_size = crq.list().size();

		return sq_size;
	}
}
