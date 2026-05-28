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
            @RequestParam int dientich,
            @RequestParam String diachi,
            @RequestParam String noidung,
            @RequestParam List<MultipartFile> file) {
    	 return room.uploadCheckfile(userId,ngaydang,hethan,giatien,dientich,diachi,noidung,file);
    }
    @GetMapping("/search")
    public List<Room> search(@RequestParam String tim){ 
    	 if( room.timkiem(tim)!=null) {
    		  return room.timkiem(tim); 
    	 }
    	 return null; 
    }
    @GetMapping("/loc")
    public List<Room> loctim(
            @RequestParam(required = false) String diachi,
            @RequestParam(required = false) String giatoithieu, // Hứng bằng String để chặn chuỗi rỗng
            @RequestParam(required = false) String giatoida,     
            @RequestParam(required = false) String dientoithieu, 
            @RequestParam(required = false) String dientoida) {  

        // Nếu chuỗi gửi lên bị rỗng hoặc null -> Biến nó thành null xịn trong Java
        String dc = (diachi == null || diachi.isBlank()) ? null : diachi;
        BigDecimal giaMin = (giatoithieu == null || giatoithieu.isBlank()) ? null : new BigDecimal(giatoithieu);
        BigDecimal giaMax = (giatoida == null || giatoida.isBlank()) ? null : new BigDecimal(giatoida);
        Integer dtMin = (dientoithieu == null || dientoithieu.isBlank()) ? null : Integer.parseInt(dientoithieu);
        Integer dtMax = (dientoida == null || dientoida.isBlank()) ? null : Integer.parseInt(dientoida);
        
        // Truyền vào Service để lọc
        return room.loctim(dc, giaMin, giaMax, dtMin, dtMax);
    }
}
