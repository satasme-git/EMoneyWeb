package satasme.promo.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "priceofquestion")
public class PriceofQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_priceofquestion")
	long id;
	@Column(name="price")
	double price;
	
	public PriceofQuestion() {
		super();
	}

	public PriceofQuestion(long id, double price) {
		super();
		this.id = id;
		this.price = price;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
}
