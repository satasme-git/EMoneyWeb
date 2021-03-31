package satasme.promo.web.entity;

import java.util.List;

public class TopUsersResponse {

	String earn;
	String email;
	
	public TopUsersResponse() {
		super();
	}

	public TopUsersResponse(String earn, String email) {
		super();
		this.earn = earn;
		this.email = email;
	}

	public String getEarn() {
		return earn;
	}

	public void setEarn(String earn) {
		this.earn = earn;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	
}
