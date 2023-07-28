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
import com.auc.entity.Bidding;
import com.auc.service.AutionService;
import com.auc.service.BiddingService;




@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class BiddingController {
	
	@Autowired
	private BiddingService serv;
	
	@PostMapping("/postbid")
	public boolean addDetails(@RequestBody Bidding obj){
		return serv.addDetails(obj);
		 }
	@GetMapping("/getbid")
	public List<Bidding> getEvent(){
		return serv.getEvent();
	}
//	@GetMapping("/getauction/{productname}")
//	public List<AutionEntity> getEventById(@PathVariable String productname){
////		return serv.getEventById(productname);
//	}	
	
	
}