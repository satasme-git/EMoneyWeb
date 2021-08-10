package satasme.promo.web.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import satasme.promo.web.entity.ScreenShot;
import satasme.promo.web.entity.User;
import satasme.promo.web.repository.ScreenShotsRepository;

@RestController
@RequestMapping("/api/ss")
public class ScreenShotController {
        @Autowired
    private ScreenShotsRepository screenShotsRepository;
    @PostMapping
        public  String saveScreenShots(@RequestBody ObjectNode node, User user){
        ScreenShot ss= new ScreenShot();
                ss.setImagepath(node.get("image_path").asText());
                ss.setUser(user);
                this.screenShotsRepository.save(ss);
                return "Success";
        }
}
