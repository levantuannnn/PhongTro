package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Room;
import com.example.demo.Repository.RoomRepository;
import com.example.demo.Jparepository.Roomperson;

@Service
public class Room_service {

    @Autowired
    private Roomperson roomRepository;

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

    public String deleteRoom(Integer id) {

        Room room = roomRepository.findById(id).orElse(null);

        if (room != null) {
            roomRepository.delete(room);
            return "Xoa thanh cong";
        }

        return "Khong tim thay phong";
    }
}