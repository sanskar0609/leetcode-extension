package com.example.leetcode;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "leetcode_requests")
public class LeetCodeRequest {

    @Id
    private Long id;
    private String questionContent;
    private String language;

    // Default constructor
    public LeetCodeRequest() {}

    // Constructor with parameters
    public LeetCodeRequest(Long id, String questionContent, String language) {
        this.id = id;
        this.questionContent = questionContent;
        this.language = language;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestionContent() {
        return questionContent;
    }

    public void setQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    @Override
    public String toString() {
        return "LeetCodeRequest{id=" + id + ", questionContent='" + questionContent + "', language='" + language + "'}";
    }
}

