package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

    @Controller
    public class HelloController{
        
        @GetMapping(value = "/")
        public String home(Model model) {
            model.addAttribute("Message", "제발");
            return "Home"();
        }    
}


