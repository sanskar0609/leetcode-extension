//package com.example.leetcode;
//
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//import org.springframework.web.reactive.function.client.WebClient;
//
//import java.util.List;
//import java.util.Map;
//
//@Service
//public class LeetCodeService {
//
//    private final WebClient webClient;
//    @Value("${gemini.api.url}")
//    private String geminiApiUrl;
//    @Value("${gemini.api.key}")
//    private String geminiApiKey;
//
//    public LeetCodeService(WebClient.Builder webClientBuilder) {
//        this.webClient = webClientBuilder.baseUrl(geminiApiUrl).build();
//    }
//
//    public String getExplanation(String questionContent) {
//        String prompt = "Explain the following LeetCode question with example: " + questionContent;
//        return getGeminiResponse(prompt);
//    }
//
//    public String getAnswer(String questionContent, String language) {
//        String prompt = "Generate a solution for the following LeetCode question " + language + ": " + questionContent;
//        return getGeminiResponse(prompt);
//    }
//
//    private String getGeminiResponse(String prompt) {
//        Map<String, Object> requestBody = Map.of(
//                "contents", new Object[]{ Map.of("parts", new Object[]{ Map.of("text", prompt) }) }
//        );
//        String response = webClient.post()
//                .uri(geminiApiUrl + geminiApiKey)
//                .header("Content-Type", "application/json")
//                .bodyValue(requestBody)
//                .retrieve()
//                .bodyToMono(String.class)
//                .block();
//
//        return extractResponseContent(response);
//    }
//
//    private String extractResponseContent(String response) {
//        try {
//            ObjectMapper mapper = new ObjectMapper();
//            JsonNode rootNode = mapper.readTree(response);
//            return rootNode.path("candidates").get(0).path("content").path("parts").get(0).path("text").asText();
//        } catch (Exception e) {
//            return "Error processing request: " + e.getMessage();
//        }
//    }
//
//}
//
//


package com.example.leetcode;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class LeetCodeService {

    private final WebClient webClient;
    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public LeetCodeService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(geminiApiUrl).build();
    }

    @Cacheable(value = "leetcodeCache", key = "#questionContent")
    public String getExplanation(String questionContent) {
        String prompt = "Explain the following LeetCode question with example and approach please not provide code: " + questionContent;
        return getGeminiResponse(prompt);
    }

    @Cacheable(value = "leetcodeCache", key = "#questionContent + #language")
    public String getAnswer(String questionContent, String language) {
        String prompt = "Generate a solution for the following LeetCode question in " + language + ": " + questionContent + ". Provide the code in a readable format with proper indentation and comments.";
        return getGeminiResponse(prompt);
    }

    private String getGeminiResponse(String prompt) {
        Map<String, Object> requestBody = Map.of(
                "contents", new Object[]{ Map.of("parts", new Object[]{ Map.of("text", prompt) }) }
        );
        String response = webClient.post()
                .uri(geminiApiUrl + geminiApiKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        return extractResponseContent(response);
    }

    private String extractResponseContent(String response) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(response);
            return rootNode.path("candidates").get(0).path("content").path("parts").get(0).path("text").asText();
        } catch (Exception e) {
            return "Error processing request: " + e.getMessage();
        }
    }
}
