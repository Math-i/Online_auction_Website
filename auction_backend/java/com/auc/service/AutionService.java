package com.auc.service;

import java.util.List;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auc.entity.AutionEntity;
import com.auc.repo.AuctionRepo;



@Service
public class AutionService {
	
	@Autowired
	private AuctionRepo repo;
	
	
	public List<AutionEntity> getEvent() {
        return repo.getEvent();
    }
	
	
	public boolean addDetails(AutionEntity obj){
		repo.save(obj);
		return true;
		
		
	}
	public List<AutionEntity> getEventById(String productname) {
        return repo.getEventById(productname);
    }
	public List<AutionEntity> getProductById(String firstname) {
        return repo.getProductById(firstname);
    }
	
}