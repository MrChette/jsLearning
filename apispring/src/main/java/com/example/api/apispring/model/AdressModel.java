package com.example.api.apispring.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter

public class AdressModel {
	
	private String street;
	private String suite;
	private String city;
	private String zipcode;
	private GeoModel geo;
	

}
