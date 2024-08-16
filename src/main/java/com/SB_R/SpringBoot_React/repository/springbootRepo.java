package com.SB_R.SpringBoot_React.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.SB_R.SpringBoot_React.model.springboot;

@Repository
public interface springbootRepo extends MongoRepository<springboot, String>{
	
	
}
