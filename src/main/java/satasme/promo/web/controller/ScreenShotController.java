package satasme.promo.web.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import satasme.promo.web.entity.ScreenShot;
import satasme.promo.web.entity.User;
import satasme.promo.web.repository.ScreenShotsRepository;
import satasme.promo.web.repository.UserRepository;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/ss")
public class ScreenShotController {


    @Autowired
    private ScreenShotsRepository screenShotsRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping
        public  String saveScreenShots(@RequestParam("image_path") MultipartFile multipartFile,@PathVariable(value = "id") long userid)
            throws IOException {
        ScreenShot ss= new ScreenShot();
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        User user = this.userRepository.findById(userid).get();
                ss.setImagepath(fileName);
                ss.setUser(user);
        ScreenShot savedImage = this.screenShotsRepository.save(ss);
        String uploadDir = "uploads/screenshots/" + savedImage.getId();
        Path userroot= Paths.get(uploadDir);
        Files.copy(multipartFile.getInputStream(), userroot.resolve(multipartFile.getOriginalFilename()));

        return "Success";
        }
}
