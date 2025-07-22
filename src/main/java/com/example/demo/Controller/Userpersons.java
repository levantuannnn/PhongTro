package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.User;
import com.example.demo.Service.User_service;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/client") // có thể thêm prefix chung cho các API
public class Userpersons {

    @Autowired
    private User_service ans;
    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

    @GetMapping("/users")
    public List<User> getAll() {
        return ans.getall();
    }

    @PostMapping("/login")
    public ResponseEntity<?> checkUser(@RequestBody User user) {
        Boolean check = ans.check(user);
        return ResponseEntity.ok(check);
    }

    @PostMapping("/adduser")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        Boolean check = ans.addUser(user);
        return ResponseEntity.ok(check);
    }
}
