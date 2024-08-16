package com.SB_R.SpringBoot_React.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Data")
public class springboot {
	
	@Id
	private String id;
	private String name;
	private String email;
	private Integer phone;
	
	
	@Override
	public String toString() {
		return "springboot [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + "]";
	}
	
}
