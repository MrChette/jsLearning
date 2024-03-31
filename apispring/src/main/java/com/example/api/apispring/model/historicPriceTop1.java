package com.example.api.apispring.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class historicPriceTop1 {

	private Integer id;
	private Integer idCryto;
	private Integer month;
	private Integer year;
	private Double precio;
	
}
