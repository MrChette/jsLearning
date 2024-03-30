package com.example.api.apispring.contoller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.api.apispring.service.HashtagService;

@RestController
@RequestMapping("/hashtags")
public class HashtagController {
	
	private final HashtagService hashtagService;

    public HashtagController(HashtagService hashtagService) {
        this.hashtagService = hashtagService;
    }

    @GetMapping("/count")
    public Map<String, Integer> gettopThreeHashtags() {
        List<Object[]> hashtagCounts = hashtagService.gettopThreeHashtags();
        Map<String, Integer> result = new HashMap<>();
        for (Object[] row : hashtagCounts) {
            String hashtag = (String) row[0];
            Long count = (Long) row[1];
            result.put(hashtag, count.intValue());
        }
        return result;
    }
    
    @GetMapping("/count/{userId}")
    public Map<String, Integer> getCountTotalHashtagsPostByUser(@PathVariable Long userId) {
        List<Object[]> hashtagCounts = hashtagService.getCountTotalHashtagspostByUser(userId);
        Map<String, Integer> result = new HashMap<>();
        for (Object[] row : hashtagCounts) {
            String hashtag = (String) row[0];
            Long count = (Long) row[1];
            result.put(hashtag, count.intValue());
        }
        return result;
    }

}
