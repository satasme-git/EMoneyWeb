package satasme.promo.web.entity;

import javax.persistence.*;

@Entity
@Table(name="screenshots")
public class ScreenShot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ss_id")
        private long id;
    @Column(name="image_path")
        private String imagepath;
    @ManyToOne
    @JoinColumn(name="userid",referencedColumnName="id_user")
        private User user;

    public ScreenShot() {
    }

    public ScreenShot(long id, String imagepath, User user) {
        this.setId(id);
        this.setImagepath(imagepath);
        this.setUser(user);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getImagepath() {
        return imagepath;
    }

    public void setImagepath(String imagepath) {
        this.imagepath = imagepath;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
