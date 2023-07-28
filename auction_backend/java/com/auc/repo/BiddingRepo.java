package com.auc.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.auc.entity.AutionEntity;
import com.auc.entity.Bidding;

public interface BiddingRepo extends JpaRepository<Bidding, String> {
	@Query(value="SELECT * from bidding",nativeQuery=true)
	public List<Bidding> getEvent();

}
