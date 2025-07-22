package com.example.demo.Jparepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Image;

public interface Imageperson extends JpaRepository<Image,Long> {

}
