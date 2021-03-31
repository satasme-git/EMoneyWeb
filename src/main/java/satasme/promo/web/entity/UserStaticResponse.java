package satasme.promo.web.entity;

import java.util.List;

public class UserStaticResponse {

	List<String> months;
	List<String> usage;
	
	public UserStaticResponse() {
		super();
	}

	public UserStaticResponse(List<String> months, List<String> usage) {
		super();
		this.months = months;
		this.usage = usage;
	}

	public List<String> getMonths() {
		return months;
	}

	public void setMonths(List<String> months) {
		this.months = months;
	}

	public List<String> getUsage() {
		return usage;
	}

	public void setUsage(List<String> usage) {
		this.usage = usage;
	}

	
	
}
