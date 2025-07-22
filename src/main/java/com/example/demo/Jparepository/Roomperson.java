package com.example.demo.Jparepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Room;

public interface Roomperson extends JpaRepository<Room,Integer> {

}
