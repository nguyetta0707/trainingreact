package ting.yue.trainingreact.controller;

import ting.yue.trainingreact.model.UserDTO;
import ting.yue.trainingreact.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/employee")
    List<UserDTO> get() {
        return userService.listUser();
    }
}
