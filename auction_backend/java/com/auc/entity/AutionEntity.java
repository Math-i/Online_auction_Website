package com.auc.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AutionEntity {
	@Id
	private String fname;
	private String lname;
	private String protype;
	private String proname;
	private String minamt;
	private String startdate;
	private String enddate;
	private String img;
}
