package satasme.promo.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dailyearnlimit")
public class DailyEarnLimit {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_dailyearnlimit")
	long id;
	@Column(name="type")
	String type;
	@Column(name="max_limit")
	double limit;
	
	public DailyEarnLimit() {
		super();
	}

	public DailyEarnLimit(long id, String type, double limit) {
		super();
		this.id = id;
		this.type = type;
		this.limit = limit;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getLimit() {
		return limit;
	}

	public void setLimit(double limit) {
		this.limit = limit;
	}

	

	
}
