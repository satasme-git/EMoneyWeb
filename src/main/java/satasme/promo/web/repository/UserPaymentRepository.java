package satasme.promo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.UserPayments;

public interface UserPaymentRepository extends JpaRepository<UserPayments, Long>{

}
