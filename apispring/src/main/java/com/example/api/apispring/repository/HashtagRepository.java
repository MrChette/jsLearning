package com.example.api.apispring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.api.apispring.entity.HashtagPost;

@Repository
public interface HashtagRepository extends JpaRepository <HashtagPost,Long>{

	@Query(value = "SELECT hp.hashtag, COUNT(hp.id) AS total " +
            "FROM HashtagPost hp " +
            "GROUP BY hp.hashtag " +
            "ORDER BY total DESC " + // Ordenar por total en orden descendente
            "LIMIT 3", nativeQuery = true) 
	List<Object[]> topThreeHashtags();

	@Query(value = "SELECT hp.hashtag, COUNT(hp.id) AS total " +
            "FROM HashtagPost hp " +
            "INNER JOIN Post p ON hp.post_id = p.id " +
            "INNER JOIN User u ON p.user_id = u.id " +
            "WHERE u.id = ?1 " +
            "GROUP BY hp.hashtag", nativeQuery = true)
	List<Object[]> countTotalHashtagspostByUser(Long userId); 
	

}
