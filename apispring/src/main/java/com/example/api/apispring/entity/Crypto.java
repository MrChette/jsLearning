package com.example.api.apispring.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cryto")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Crypto {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    
    @Column(name="name", unique = true, nullable = false)
    private String name;
   
    @OneToMany(mappedBy = "crypto", cascade = CascadeType.ALL)
    private List<historicPrice> historicPrice;
    

}
