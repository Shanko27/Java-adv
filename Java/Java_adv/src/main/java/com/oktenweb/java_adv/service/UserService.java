package com.oktenweb.java_adv.service;


import com.oktenweb.java_adv.dao.IUserDao;
import com.oktenweb.java_adv.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService implements IUserService {

private IUserDao userDao;

private PasswordEncoder passwordEncoder;

    @Override
    public String createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (!user.getRole().startsWith("ROLE_")){
            throw new RuntimeException("User role should start with 'ROLE_'");
        }
        User savedUser = userDao.save(user);
        return savedUser.getUsername();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDao.findByUsername(username);
    }
}
