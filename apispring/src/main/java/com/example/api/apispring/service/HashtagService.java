package com.example.api.apispring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.api.apispring.repository.HashtagRepository;

@Service
public class HashtagService {
	
	private final HashtagRepository hashtagRepository;

    public HashtagService(HashtagRepository hashtagRepository) {
        this.hashtagRepository = hashtagRepository;
    }

    public List<Object[]> gettopThreeHashtags() {
        return hashtagRepository.topThreeHashtags();
    }
    
    public List<Object[]> getCountTotalHashtagspostByUser(Long userId) {
        return hashtagRepository.countTotalHashtagspostByUser(userId);
    }
}
