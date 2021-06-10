package satasme.promo.web.entity;

import javax.persistence.*;

@Entity
@Table(name = "link_timer")
public class Timer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private
    long id;
    @Column(name="time",nullable = false)
    private
    double timer;

    public Timer() {
        super();
    }

    public Timer(long id, double timer) {
        this.id = id;
        this.timer = timer;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getTimer() {
        return timer;
    }

    public void setTimer(double timer) {
        this.timer = timer;
    }
}
