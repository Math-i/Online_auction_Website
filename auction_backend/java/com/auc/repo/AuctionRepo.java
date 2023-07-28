package com.auc.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.auc.entity.AutionEntity;

public interface AuctionRepo extends JpaRepository<AutionEntity,String> {
	@Query(value="SELECT * from aution_entity",nativeQuery=true)
	public List<AutionEntity> getEvent();
	@Query(value="SELECT * from aution_entity where proname=:productname",nativeQuery=true)
	public List<AutionEntity> getEventById(String productname);
	@Query(value="SELECT * from aution_entity where fname=:fname",nativeQuery=true)
	public List<AutionEntity> getProductById(String fname);
	
}
