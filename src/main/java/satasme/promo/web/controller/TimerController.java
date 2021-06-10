package satasme.promo.web.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import satasme.promo.web.entity.Timer;
import satasme.promo.web.repository.TimerRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@RestController
@RequestMapping("/api/link_timer")
public class TimerController {
        @Autowired
        private TimerRepository timerRepository;
        @PersistenceContext
        protected EntityManager emt;

    @PutMapping
    public String editTimer(@RequestBody ObjectNode node) {
        long pid=1;
        Timer timer=timerRepository.findById(pid).get();
        timer.setTimer(node.get("timer").asDouble());
        this.timerRepository.save(timer);
        return "success";
    }
    @GetMapping("/time/1")
    public double getNewTime(){
        long pid=1;
        Timer timer=timerRepository.findById(pid).get();
        double time=timer.getTimer();
        return time;
    }



}
