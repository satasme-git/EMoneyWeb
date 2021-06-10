package satasme.promo.web.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import satasme.promo.web.entity.AdminLogin;
import satasme.promo.web.repository.AdminLoginRepository;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private AdminLoginRepository adminLoginRepository;

    @PostMapping
    public String createUser(@RequestBody ObjectNode node) {
        AdminLogin add = new AdminLogin();
        add.setEmail(node.get("email").asText());
        add.setPassword(node.get("key").asText());
        add.setUsername(node.get("username").asText());
        add.setRole(node.get("role").asText());
        add.setStatus("Active");
        this.adminLoginRepository.save(add);

        return "Success";
    }

}
