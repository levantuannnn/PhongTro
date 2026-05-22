DU AN TIM KIEM PHONG TRO

1. Muc dich du an
- Dang tin phong tro
- Tim kiem phong tro
- Quan ly du lieu bang MySQL

==================================================

2. Cau truc du an

DU AN TIM KIEM PHONG TRO
│
├── Client
│   ├── dangnhap.html
│   ├── dangtin.html
│   ├── index.html
│   ├── product.html
│   ├── tindaluu.html
│   ├── filter.js
│   ├── login.js
│   ├── person.js
│   ├── scrip.js
│   ├── sigin.js
│   ├── style.css
│   └── login.css
│
├── src/main/java/com/example/demo
│   │
│   ├── config
│   │   └── WebConfig.java
│   │
│   ├── Controller
│   │   ├── AnhController.java
│   │   ├── RoomController.java
│   │   └── Userpersons.java
│   │
│   ├── Jparepository
│   │   ├── Imageperson.java
│   │   ├── Roomperson.java
│   │   └── Userperson.java
│   │
│   ├── Model
│   │   ├── Image.java
│   │   ├── Room.java
│   │   └── User.java
│   │
│   ├── Service
│   │   ├── Image_service.java
│   │   ├── Room_service.java
│   │   └── User_service.java
│   │
│   └── PhongtroApplication.java
│
├── resources
│   └── application.properties
│
└── Database MySQL
    ├── users
    ├── room
    └── image

==================================================

3. Cong nghe su dung

- Java JDK 17+
- Spring Boot
- MySQL
- Maven
- HTML CSS JavaScript
- Git

==================================================

4. Cai dat MySQL

- Cai MySQL
- Tao username va password

Vi du:
username: root
password: 123456

==================================================

5. Import database

- Tim file: phongs.sql
- Mo MySQL Workbench
- Tao database phongtro
- Copy file SQL vao
- Execute

Muc dich:
- Tao table
- Tao khoa chinh
- Tao khoa ngoai

==================================================

6. application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/phongtro
spring.datasource.username=root
spring.datasource.password=123456

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080

==================================================

7. Chay backend

mvn spring-boot:run

Hoac chay:
PhongtroApplication.java

==================================================

8. Chay frontend

Mo:
index.html

Hoac dung Live Server

==================================================

9. Luong hoat dong

Frontend
   ↓
Fetch API
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
MySQL

==================================================

10. Quan he du lieu

1 User
   └── Nhieu Room

1 Room
   └── Nhieu Image