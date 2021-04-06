package satasme.promo.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "servey_answers")
public class ServeyAnswers {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_serveyans")
	long id;
	@Column(name="answers")
	String answers;
	@ManyToOne
	@JoinColumn(name="serveyid",referencedColumnName="id_servey")
	private Servey servey;
	@ManyToOne
	@JoinColumn(name="serveyq_id",referencedColumnName="id_serveyq")
	private ServeyQuestions serveyq;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;
	
	public ServeyAnswers() {
		super();
	}

	public ServeyAnswers(long id, String answers, Servey servey, ServeyQuestions serveyq, User user) {
		super();
		this.id = id;
		this.answers = answers;
		this.servey = servey;
		this.serveyq = serveyq;
		this.user = user;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAnswers() {
		return answers;
	}

	public void setAnswers(String answers) {
		this.answers = answers;
	}

	public Servey getServey() {
		return servey;
	}

	public void setServey(Servey servey) {
		this.servey = servey;
	}

	public ServeyQuestions getServeyq() {
		return serveyq;
	}

	public void setServeyq(ServeyQuestions serveyq) {
		this.serveyq = serveyq;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
