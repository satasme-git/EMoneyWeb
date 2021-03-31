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
@Table(name = "serveys")
public class Servey {
	@Id
	@Column(name="id_servey")
	long id;
	@Column(name="add_date")
	String addedDate;
	@Column(name="status")
	String status;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;
	
	public Servey() {
		super();
	}

	public Servey(long id, String addedDate, String status, User user) {
		super();
		this.id = id;
		this.addedDate = addedDate;
		this.status = status;
		this.user = user;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAddedDate() {
		return addedDate;
	}

	public void setAddedDate(String addedDate) {
		this.addedDate = addedDate;
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
