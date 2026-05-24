package com.example.demo.Service;

 
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Model.Image;
import com.example.demo.Model.Room;
import com.example.demo.Model.User;
import com.example.demo.Jparepository.Imageperson;
import com.example.demo.Jparepository.Roomperson;
import com.example.demo.Jparepository.Userperson;

@Service
public class Room_service {

    @Autowired
    private Roomperson roomRepository;
    @Autowired
    private Imageperson ige;
    @Autowired
    private Userperson person;
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room getRoomById(Integer id) {
        return roomRepository.findById(id).orElse(null);
    }

    public Room createRoom(Room room) {
        return roomRepository.save(room);
    }

    public Room updateRoom(Integer id, Room room) {

        Room oldRoom = roomRepository.findById(id).orElse(null);

        if (oldRoom != null) {

            oldRoom.setAddress(room.getAddress());
            oldRoom.setPrice(room.getPrice());
            oldRoom.setNoiDung(room.getNoiDung());
            oldRoom.setExpiredAt(room.getExpiredAt());
            oldRoom.setImages(room.getImages());

            return roomRepository.save(oldRoom);
        }

        return null;
    }
    public List<Room> checkfilter(String diachi,BigDecimal giatoithieu,BigDecimal giatoida) {
    	 List<Room> roms=roomRepository.findByAddress(diachi);
    	 return roms;
    }
    public String deleteRoom(Integer id) {

        Room room = roomRepository.findById(id).orElse(null);

        if (room != null) {
            roomRepository.delete(room);
            return "Xoa thanh cong";
        }

        return "Khong tim thay phong";
    }
    public Boolean uploadCheckfile(Integer id,
            LocalDate ngaydang,
            LocalDate hethan,
            BigDecimal giatien,
            int dientich,
            String diachi,
            String noidung, List<MultipartFile> file
    ) {

        try {
        	User user=person.findById(id).orElse(null);
            Room room = new Room();
            room.setUser(user);
            room.setCreatedAt(ngaydang);
            room.setExpiredAt(hethan);
            room.setPrice(giatien);
            room.setDientich(dientich);
            room.setAddress(diachi);
            room.setNoiDung(noidung);

            List<Image> imageList = new ArrayList<>();

            if (file != null && !file.isEmpty()) {

                for (MultipartFile multipartFile : file) {

                    Image image = new Image();

                    image.setImage_data(multipartFile.getBytes());

                    image.setRoom(room); // ⭐ QUAN TRỌNG

                    imageList.add(image);
                }
            }

            room.setImages(imageList);

            roomRepository.save(room);

            return true;

        } catch (Exception e) {

            e.printStackTrace();

            return false;

        }

    }
    public  List<Room> timkiem(String timkiem){
    	  List<Room> st=roomRepository.findAll();
    	  return st.stream().filter(x->x.getAddress().toLowerCase().contains(timkiem.toLowerCase())).toList();
    }
    public List<Room> loctim(String diachi,BigDecimal giatoithieu,BigDecimal giatoida,Integer dientoithieu,Integer dientoida){
    	  List<Room> st=roomRepository.findAll();
    	  return st.stream()
    		        .filter(x -> x.getAddress().toLowerCase().contains(diachi.toLowerCase())
    		                && x.getPrice().compareTo(giatoithieu) >= 0
    		                && x.getPrice().compareTo(giatoida) <= 0)
    		        .toList();    }
}