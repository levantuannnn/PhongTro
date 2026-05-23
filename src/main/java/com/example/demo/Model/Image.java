package com.example.demo.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "room_images")
public class Image{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public byte[] getImage_data() {
		return image_data;
	}

	public void setImage_data(byte[] image_data) {
		this.image_data = image_data;
	}

	@ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
    @Lob
    @Column(name = "image_data", columnDefinition = "LONGBLOB",nullable = true)
    private byte[] image_data;	
    public Image() {
		super();
	
	}
	 
	public Image(Long id, Room room, byte[] image_data, String image) {
		super();
		this.id = id;
		this.room = room;
		this.image_data = image_data;
		this.image = image;
	}

	@Column(columnDefinition = "TEXT")
    private String image;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Room getRoom() { return room; }
    public void setRoom(Room room) { this.room = room; } 
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}