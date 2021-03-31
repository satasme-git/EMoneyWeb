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
@Table(name = "servey_questions")
public class YesNoServeyQuestions {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_serveyq")
	long id;
	@Column(name="qtype")
	String qtype;
	@Column(name="question")
	String question;
	@Column(name="answers")
	String answers;
	@Column(name="status")
	String status;
	@ManyToOne
	@JoinColumn(name="serveyid",referencedColumnName="id_servey")
	private Servey servey;
	
	public YesNoServeyQuestions() {
		super();
	}

	public YesNoServeyQuestions(long id, String question, String status, Servey servey) {
		super();
		this.id = id;
		this.question = question;
		this.status = status;
		this.servey = servey;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Servey getServey() {
		return servey;
	}

	public void setServey(Servey servey) {
		this.servey = servey;
	}

	public String getQtype() {
		return qtype;
	}

	public void setQtype(String qtype) {
		this.qtype = qtype;
	}

	public String getAnswers() {
		return answers;
	}

	public void setAnswers(String answers) {
		this.answers = answers;
	}
}
