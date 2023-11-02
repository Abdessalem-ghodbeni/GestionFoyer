package tn.esprit.tp1_ghodbani_abdessalem_4twin_7;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"tn.esprit.tp1_ghodbani_abdessalem_4twin_7","tn.esprit.tp1_ghodbani_abdessalem_4twin_7.CorsConfiguration"})
public class Tp1GhodbaniAbdessalem4Twin7Application {

	public static void main(String[] args) {
		SpringApplication.run(Tp1GhodbaniAbdessalem4Twin7Application.class, args);
	}

}
