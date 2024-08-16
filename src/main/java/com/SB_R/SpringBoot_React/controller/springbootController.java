package com.SB_R.SpringBoot_React.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SB_R.SpringBoot_React.model.springboot;
import com.SB_R.SpringBoot_React.repository.springbootRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/data")
public class springbootController {

	@Autowired
	private springbootRepo repo;
	
	///Adding user data
	@PostMapping("/add")
	public springboot add(@RequestBody springboot springBoot) {
		System.out.println("Received data: " + springBoot);
		return repo.save(springBoot);
	}
	
	///Showing all the data
	@GetMapping("/viewAll")
	public List<springboot> getAllData(){
		System.out.println("Showing All");
		return repo.findAll();
	}
	
	///Fetching single record
	@GetMapping("/{id}")
	public Optional<springboot> findById(@PathVariable("id") String Id){
		System.out.println("Fetching data for " + Id);
		return repo.findById(Id);
	}
	
	
	///Update a record
	@PutMapping("/update")
	public springboot update(@RequestBody springboot springBoot) {
		System.out.println("Updating records");
		return repo.save(springBoot);
	}
	
	
	///deleting a records by ID
	@DeleteMapping("/{id}")
	public List<springboot> delete(@PathVariable("id") String Id){
		repo.deleteById(Id);
		System.out.println("Successfully deleted!!!");
		return repo.findAll();
	}
	
}
