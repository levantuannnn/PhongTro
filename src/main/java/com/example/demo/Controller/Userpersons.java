package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.User;
import com.example.demo.Service.User_service; 
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

    @PostMapping("/login/user")
    public ResponseEntity<?> checkUser(@RequestParam String username, @RequestParam String password) {
        Boolean check = ans.check(username,password);
        return ResponseEntity.ok(check);
    }

    @PostMapping("/adduser")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        Boolean check = ans.addUser(user);
        return ResponseEntity.ok(check);
    }
}
