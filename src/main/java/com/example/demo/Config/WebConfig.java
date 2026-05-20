package com.example.demo.Config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Cho phép tất cả các endpoint
            .allowedOrigins("http://127.0.0.1:5500") // Cho phép origin của bạn
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Các phương thức được phép
            .allowedHeaders("*") // Cho phép tất cả các headers
            .allowCredentials(true); // Nếu dùng cookie
    }
}
