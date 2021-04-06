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
@Table(name = "userotherengagement")
public class UserOtherEngagement {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_otherengagement")
	long id;
	@Column(name="date")
	String date;
	@Column(name="service")
	String service;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;
	@ManyToOne
	@JoinColumn(name="serveyid",referencedColumnName="id_servey")
	private Servey servey;
	
	public UserOtherEngagement() {
		super();
	}

	public UserOtherEngagement(long id, String date, String service, User user, Servey servey) {
		super();
		this.id = id;
		this.date = date;
		this.service = service;
		this.user = user;
		this.servey = servey;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Servey getServey() {
		return servey;
	}

	public void setServey(Servey servey) {
		this.servey = servey;
	}
}
