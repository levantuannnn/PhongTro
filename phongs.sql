CREATE DATABASE quanlyphongtro;
USE quanlyphongtro;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    sdt VARCHAR(20)
);

CREATE TABLE rooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expired_at DATE,
    price DECIMAL(15,2),
    address VARCHAR(255),
    noi_dung VARCHAR(250),

    CONSTRAINT fk_room_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE TABLE room_images (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    room_id INT,
    image TEXT,

    CONSTRAINT fk_image_room
    FOREIGN KEY (room_id)
    REFERENCES rooms(id)
    ON DELETE CASCADE
);
-- Them du lieu
USE quanlyphongtro;

INSERT INTO users(username, password, sdt)
VALUES 
('tuan', '123456', '0987654321'),
('admin', 'admin123', '0911222333');

INSERT INTO rooms(user_id, expired_at, price, address, noi_dung)
VALUES
(1, '2026-12-31', 2500000, 'Nha Trang - Khanh Hoa', 'Phong tro gan bien, co wifi'),
(1, '2026-11-20', 3200000, 'TP HCM - Quan 9', 'Phong moi xay, co may lanh'),
(2, '2026-10-15', 1800000, 'Da Nang', 'Phong gia re cho sinh vien');

INSERT INTO room_images(room_id, image)
VALUES
(1, 'https://example.com/images/phong1_1.jpg'),
(1, 'https://example.com/images/phong1_2.jpg'),

(2, 'https://example.com/images/phong2_1.jpg'),
(2, 'https://example.com/images/phong2_2.jpg'),

(3, 'https://example.com/images/phong3_1.jpg');