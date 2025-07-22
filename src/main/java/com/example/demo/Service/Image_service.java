package com.example.demo.Service;
 
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Jparepository.Imageperson;
import com.example.demo.Model.Image;

@Service
public class Image_service {
   @Autowired
   private   Imageperson image;
    // hien thi toan bo file anh trong  database;
   public  List<Image>  getall_image(){
	    return image.findAll();
   }
   // kiem tra theo ten id cua phong tro
	   public List<Image> getID(Long id){
		    Optional<Image> check=image.findById(id);
		    
		     if(check.isPresent()) {
		    	   return image.findAll();
		     }
		     else {
		    	  return new ArrayList<>();
		     }
	   }
   //
 
   //cap nhat file 
   public void Save_updateImage(Long id) {
	    Optional<Image> check=image.findById(id);
	    // cap nhat file anh
	    if(check.isPresent()) {
	    	  Image updateImage=new Image();
	    	  Image ans=check.get(); 
	    	  updateImage.setImage(ans.getImage());
	    	  image.save(updateImage);
	    }
	    else {
	    	 System.out.printf("Loi creption");
	    }
	    // luu vao  databae 
 
   }
   // xoa file anh trong database
   public void deleteimage(Long id) {
	    Optional<Image> deimage=image.findById(id);
	    if(deimage.isEmpty()) {
	    	 image.deleteById(id);
	    }
	    else {
	    	 
	    }
   } 
}
