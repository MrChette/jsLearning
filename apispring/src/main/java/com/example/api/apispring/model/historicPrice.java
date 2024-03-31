package com.example.api.apispring.model;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class historicPrice {
	
	private Integer id;
	private Integer idCrypto;
	private Double precio;
	private Date fecha;

}
