package satasme.promo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.YesNoServeyQuestions;

public interface ServeyQuestionRepository extends JpaRepository<YesNoServeyQuestions, Long>{

}
