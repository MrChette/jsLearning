package com.example.api.apispring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.api.apispring.entity.HashtagPost;

@Repository
public interface HashtagRepository extends JpaRepository <HashtagPost,Long>{

	@Query("SELECT hp.hashtag, COUNT(hp.id) AS total " +
		       "FROM HashtagPost hp " +
		       "GROUP BY hp.hashtag")
	List<Object[]> countTotalHashtagspost();


}
