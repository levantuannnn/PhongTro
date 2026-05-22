package com.example.demo.Jparepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Model.Room;

public interface Roomperson extends JpaRepository<Room,Integer> {
	@Query("SELECT r FROM Room r WHERE r.address LIKE %:diachi%")
	 List<Room> findByAddress(@Param("diachi") String diachi);
}
