package com.eggroup.lowkey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class LowkeyApplication {
	public static void main(String[] args) {
		SpringApplication.run(LowkeyApplication.class, args);
	}

}
