package com.example.api.apispring.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@JsonPropertyOrder({ "id", "name", "username", "email", "address", "phone", "website", "company" })
public class UserModel {
	
	private Integer id;
	private String name;
	private String username;
	private String email;
	private AdressModel address;
	private String phone;
	@JsonProperty("website")
	private String webSite;
	private CompanyModel company;

}
