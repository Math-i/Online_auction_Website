package com.auc.service;

import java.util.List;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auc.entity.AutionEntity;
import com.auc.entity.Bidding;
import com.auc.repo.AuctionRepo;
import com.auc.repo.BiddingRepo;



@Service
public class BiddingService {
	
	@Autowired
	private BiddingRepo repo;
	

	public List<Bidding> getEvent() {
        return repo.getEvent();
    }
	
	
	public boolean addDetails(Bidding obj){
		repo.save(obj);
		return true;
		
		
	}
//	public List<Bidding> getEventById(String productname) {
//        return repo.getEventById(productname);
//    }
//	
}
