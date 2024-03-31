package com.example.api.apispring.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "historicprice")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class historicPrice {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	
	@ManyToOne
    @JoinColumn(name = "crypto_id", nullable = false)
    private Crypto crypto;
	
	@Column(name="precio", unique = false, nullable = false)
	private Double precio;
	
	@Column(name="fecha", unique = false, nullable = false)
	private Date fecha;
	



}
