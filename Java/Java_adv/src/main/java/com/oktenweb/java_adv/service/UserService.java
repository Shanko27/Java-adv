package com.oktenweb.java_adv.service;


import com.oktenweb.java_adv.dao.IUserDao;
import com.oktenweb.java_adv.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service

public class UserService implements IUserService, UserDetailsService {

    @Autowired
private IUserDao userDao;
@Autowired
private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDao.findByUsername(username);
    }

    @Override
    public String createUser(User user) {
        //Перед збереженням у базу, пароль користувача має бути зашифрований тим самим алгоритмом,
        // що і використовується для розшифровування при логінуванні (див. SecurityConfig)
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Можна або так, або якийсь інший спосіб валідації. Головне щоб роль юзера в базі починалась з ROLE_
        if (!user.getRole().startsWith("ROLE_")) {
            throw new RuntimeException("User role should start with 'ROLE_'");
        }
        User savedUser = userDao.save(user);
        return savedUser.getUsername();
    }
}
