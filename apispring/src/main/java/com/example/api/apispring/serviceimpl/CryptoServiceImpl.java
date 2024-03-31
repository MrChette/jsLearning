package com.example.api.apispring.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.example.api.apispring.entity.Crypto;
import com.example.api.apispring.model.CryptoModel;
import com.example.api.apispring.repository.CryptoRepository;
import com.example.api.apispring.service.GenericService;


@Service("croductServiceImpl")
public class CryptoServiceImpl implements  GenericService<Crypto,CryptoModel,Long>{
	
	@Autowired
	@Qualifier("cryptoRepository")
	private CryptoRepository cryptoRepository;
	

	@Override
	public Crypto addEntity(CryptoModel model) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean removeEntity(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Crypto updateEntity(CryptoModel model) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Crypto findEntityById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CryptoModel findModelById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Crypto transform(CryptoModel model) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CryptoModel transformToModel(Crypto entity) {
		ModelMapper mp = new ModelMapper();
		return mp.map(entity, CryptoModel.class);
	}

	@Override
	public List<CryptoModel> listAll() {
		return cryptoRepository.findAll().stream()
				.map(p-> transformToModel(p)).collect(Collectors.toList());
	}

	@Override
	public List<Crypto> saveAllEntities(List<Crypto> models) {
		// TODO Auto-generated method stub
		return null;
	}

}
