package com.CrypTrading.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping
    public String home() {
        return "Welcome to trading Platform";
    }

    @GetMapping("/api")
    public String secure() {
        return "Hi you are inside SECURE ROUTE NOW!";
    }
}
