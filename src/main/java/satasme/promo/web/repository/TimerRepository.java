package satasme.promo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import satasme.promo.web.entity.Timer;

public interface TimerRepository extends JpaRepository<Timer, Long> {
}
