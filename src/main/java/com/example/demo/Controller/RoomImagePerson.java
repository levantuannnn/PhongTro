package com.example.demo.Controller;
 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.demo.Model.Image;
import com.example.demo.Service.Image_service;

@Controller
public class RoomImagePerson {
    @Autowired
    private   Image_service image; 
    @GetMapping("/getall")
   public List<Image> getImage(){
    	return   image.getall_image();
    }
    @GetMapping("/getall/{id}")
    public List<Image> getALLid(@PathVariable("id") String name){
    	Long id=Long.valueOf(name);
    	 return image.getID(id);
    }
    @PostMapping("/{id}")
     public  void SaveImage(@PathVariable("{id}") String name) {
    	  Long id=Long.valueOf(name);
    	    image.Save_updateImage(id);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("{id}") String name) {
    	  Long id=Long.valueOf(name);
  	        image.deleteimage(id);
    }
}
