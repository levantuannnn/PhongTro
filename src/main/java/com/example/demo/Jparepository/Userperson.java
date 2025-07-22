package com.example.demo.Jparepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.User;
@Repository
public interface Userperson extends JpaRepository<User, Integer>{
	   Optional<User> findByUsername(String username);

	    // Tìm người dùng theo username và password
	    Optional<User> findByUsernameAndPassword(String username, String password);

}
