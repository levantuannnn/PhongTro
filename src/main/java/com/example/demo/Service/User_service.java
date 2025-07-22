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

    public Boolean check(User try_user) {
        return userRepository
                .findByUsernameAndPassword(try_user.getUsername(), try_user.getPassword())
                .isPresent();
        
    }

    public Boolean addUser(User adduser) {
        Optional<User> existing = userRepository.findByUsername(adduser.getUsername());
        if (existing.isEmpty()) {
            userRepository.save(adduser);
            return true;
        }
        return false;
    }
}


