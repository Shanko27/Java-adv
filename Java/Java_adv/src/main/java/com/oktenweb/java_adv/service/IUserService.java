package com.oktenweb.java_adv.service;

import com.oktenweb.java_adv.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IUserService extends UserDetailsService {
    String createUser(User user);
}
