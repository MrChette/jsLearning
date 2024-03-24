package com.example.api.apispring.contoller;

import java.util.Arrays;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.api.apispring.model.UserModel;

@RestController
@RequestMapping("/user")
public class RestUser {

	private static String _baseUrl = "https://jsonplaceholder.typicode.com/";
	
	private final RestTemplate restTemplate;
	
	
	public RestUser(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}
	
	@GetMapping("/all")
	public ResponseEntity<Page<UserModel>> getAllUsers(
			@RequestParam(required = false, defaultValue = "0") Integer page,
			@RequestParam(required = false, defaultValue = "10") Integer size){
		
		String url = _baseUrl + "/users";
		UserModel[] userList = restTemplate.getForObject(url, UserModel[].class);
		List<UserModel> usersList = Arrays.asList(userList);
		
		// Paginacion
		int start = Math.min(page * size, usersList.size());
		int end = Math.min(start + size, usersList.size());


		Page<UserModel> usersPage = new PageImpl<>(usersList.subList(start, end), PageRequest.of(page, size), usersList.size());
		
		
		return ResponseEntity.ok(usersPage);
		
	}
	
	
	
	
	

}
