package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Jparepository.Userperson;
import com.example.demo.Model.User;@Service
public class User_service {

    @Autowired
    private Userperson userRepository;

    public List<User> getall() {
        return userRepository.findAll();
    }

    public Integer check(String username, String password) {
       User user= userRepository
                .findByUsernameAndPassword(username,password).orElse(null);
       return user.getId();
        
    }

    public Boolean addUser(String  username, String password) {
        Optional<User> existing = userRepository.findByUsername(username);
        if (existing.isEmpty()) {
        	User user=new User();
        	user.setPassword(password);
        	user.setUsername(username);
            userRepository.save(user);
            return true;
        }
        return false;
    }
}


