package com.example.api.apispring.entity;

import java.time.LocalDateTime;

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
@Table(name = "hashtagpost")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class HashtagPost {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	
	@ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;
	
	@Column(name="hashtag", unique = false, nullable = false)
	private String hashtag;
	
	@Column(name="created_at", unique = false, nullable = false)
	private LocalDateTime created_at;
	
	@Column(name="display", unique = false, nullable = false)
	private String display;
}
