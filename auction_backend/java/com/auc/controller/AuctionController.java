package com.auc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.auc.entity.AutionEntity;
import com.auc.service.AutionService;




@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class AuctionController {
	
	@Autowired
	private AutionService serv;
	
	@PostMapping("/postauction")
	public boolean addDetails(@RequestBody AutionEntity obj){
		return serv.addDetails(obj);
		 }
	@GetMapping("/getauction")
	public List<AutionEntity> getEvent(){
		return serv.getEvent();
	}
	@GetMapping("/getauction/{productname}")
	public List<AutionEntity> getEventById(@PathVariable String productname){
		return serv.getEventById(productname);
	}	
	@GetMapping("/getauct/{fname}")
	public List<AutionEntity> getProductById(@PathVariable String fname){
		return serv.getProductById(fname);
	}	
	
	
}