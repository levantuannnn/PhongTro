# DU AN TIM KIEM PHONG TRO
-- CAU TRUC DU AN
DU AN TIM KIEM PHONG TRO
│
├── Client
│   │
│   ├── img_header/
│   │
│   ├── dangnhap.html
│   ├── dangtin.html
│   ├── index.html
│   ├── product.html
│   ├── tindaluu.html
│   │
│   ├── filter.js
│   ├── login.js
│   ├── person.js
│   ├── scrip.js
│   ├── sigin.js
│   │
│   ├── style.css
│   └── login.css
│
├── src
│   │
│   └── main
│       │
│       ├── java
│       │   │
│       │   └── com.example.demo
│       │       │
│       │       ├── config
│       │       │   └── WebConfig.java
│       │       │
│       │       ├── Controller
│       │       │   ├── AnhController.java
│       │       │   ├── RoomController.java
│       │       │   └── Userpersons.java
│       │       │
│       │       ├── Jparepository
│       │       │   ├── Imageperson.java
│       │       │   ├── Roomperson.java
│       │       │   └── Userperson.java
│       │       │
│       │       ├── Model
│       │       │   ├── Image.java
│       │       │   ├── Room.java
│       │       │   └── User.java
│       │       │
│       │       ├── Service
│       │       │   ├── Image_service.java
│       │       │   ├── Room_service.java
│       │       │   └── User_service.java
│       │       │
│       │       └── PhongtroApplication.java
│       │
│       └── resources
│           ├── application.properties
│           └── static/
│
└── Database (MySQL)
    │
    ├── users
    ├── room
    └── image
## Mục đích của dự án tìm kiếm phòng trọ là xây dựng một hệ thống giúp:
--Người đăng phòng có thể đăng tin cho thuê
--Người tìm phòng có thể tìm kiếm và xem phòng
--Hệ thống quản lý dữ liệu phòng trọ trên database
### Cài đặt và Setup dự án tìm kiếm phòng trọ
Công nghệ	                 Mục đích
Java JDK 17+	            Chạy Spring Boot
MySQL	                         Database
Maven	                       Build project
VS Code hoặc IntelliJ	         Code
Git	                        Quản lý source
--. Cài MySQL
-tìm kiếm file phongs.sql sau đó copy toàn bộ file vào mysql tìm sql sau đó thả toàn bộ vào chạy cài đặt table khóa chính khóa ngoại trường dữ liệu để vào dự án

--Setup application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/phongtro
spring.datasource.username=root( setup ban dau cài đặt mysql)
spring.datasource.password=123456(setup ban dau cài đặt mysql setup trước)

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080