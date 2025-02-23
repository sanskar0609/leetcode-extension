package com.example.leetcode;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/leetcode")
@CrossOrigin(origins = "*")
public class LeetCodeController {

    private final LeetCodeService leetCodeService;

    public LeetCodeController(LeetCodeService leetCodeService) {
        this.leetCodeService = leetCodeService;
    }

    @PostMapping("/explain")
    public ResponseEntity<String> explainQuestion(@RequestBody LeetCodeRequest request) {
        String explanation = leetCodeService.getExplanation(request.getQuestionContent());
        return ResponseEntity.ok(explanation);
    }

    @PostMapping("/answer")
    public ResponseEntity<String> generateAnswer(@RequestBody LeetCodeRequest request) {
        String answer = leetCodeService.getAnswer(request.getQuestionContent(), request.getLanguage());
        return ResponseEntity.ok(answer);
    }
}
