package com.example.demo.Controller;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Model.Room;
import com.example.demo.Service.Room_service;

@RestController
@RequestMapping("/api/room")
public class RoomController {
	 @Autowired 
	 private  Room_service room; 
	 @GetMapping("/getall")
	 public List<Room> getall(){
		  return  room.getAllRooms(); 
	 }
    @GetMapping("/filter")
     public  List<Room> check(@RequestParam String diachi,@RequestParam   BigDecimal giatoithieu, @RequestParam BigDecimal giatoida) {
    	 return room.checkfilter(diachi,giatoithieu,giatoida);
    }
    @PostMapping("/file")
    public Boolean  uploadRoom(@RequestParam Integer userId,
            @RequestParam LocalDate ngaydang, 
            @RequestParam LocalDate hethan,
            @RequestParam BigDecimal giatien,
            @RequestParam String diachi,
            @RequestParam String noidung,
            @RequestParam List<MultipartFile> file) {
    	 return room.uploadCheckfile(userId,ngaydang,hethan,giatien,diachi,noidung,file);
    }
    @GetMapping("/search")
    public List<Room> search(@RequestParam String tim){ 
    	 return room.timkiem(tim); 
    	 
    }
}
