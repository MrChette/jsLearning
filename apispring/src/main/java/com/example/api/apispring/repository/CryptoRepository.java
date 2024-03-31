package com.example.api.apispring.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.api.apispring.entity.Crypto;

@Repository("cryptoRepository")
public interface CryptoRepository extends JpaRepository<Crypto, Serializable>{

}
