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
@Table(name = "userpayments")
public class UserPayments {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_userpayments")
	long id;
	@Column(name="amount")
	String amount;
	@Column(name="payed_date")
	String date;
	@Column(name="status")
	String status;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;
	
	public UserPayments() {
		super();
	}

	public UserPayments(long id, String amount, String date, String status, User user) {
		super();
		this.id = id;
		this.amount = amount;
		this.date = date;
		this.status = status;
		this.user = user;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
