package satasme.promo.web.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.UserPayments;

public interface UserPaymentRepositoryCustom {
	public String findUserPaymentTotal(long userid);
	public List<UserPayments> findUserPaymentList(long userid);
}
