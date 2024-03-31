package com.example.api.apispring.contoller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.api.apispring.model.CryptoModel;
import com.example.api.apispring.serviceimpl.CryptoServiceImpl;

@RestController
@RequestMapping("/crypto")
public class CryptoController {
	
	 private final CryptoServiceImpl cryptoService;

	    public CryptoController(CryptoServiceImpl cryptoService) {
	        this.cryptoService = cryptoService;
	    }

	    @GetMapping("/listAll")
	    public List<CryptoModel> listAllCrypto() {
	        return cryptoService.listAll();
	    }

}
