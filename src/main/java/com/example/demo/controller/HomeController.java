package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@GetMapping("/register")
	public String register() {
		return "register";
	}
	
	@GetMapping("/LCPdashboard")
	public String LCPdashboard() {
		return "LCPdashboard";
	}
	@GetMapping("/LCVPdashboard")
	public String LCVPdashboard() {
		return "LCVPdashboard";
	}
	@GetMapping("/Mdashboard")
	public String Mdashboard() {
		return "Mdashboard";
	}
	@GetMapping("/TLdashboard")
	public String TLdashboard() {
		return "TLdashboard";
	}
}
