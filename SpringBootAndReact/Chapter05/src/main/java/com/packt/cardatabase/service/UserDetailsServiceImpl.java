package com.packt.cardatabase.service;

import com.packt.cardatabase.domain.User;
import com.packt.cardatabase.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import   org.springframework.security.core.userdetails.User.UserBuilder;

import java.util.Optional;
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository repository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user =  repository.findByUsername(username);

        UserBuilder builder = null;

        if  (user.isPresent()){
            User currentUser = user.get();
            builder =
                    org.springframework.security.core.userdetails.User.withUsername(username);
            builder.password(currentUser.getPassword());
            builder.roles(currentUser.getRole());
            System.out.println(currentUser.getRole());
            System.out.println(username);
            System.out.println("확인");
        }
        else {
            System.out.println("안될");

            throw  new UsernameNotFoundException("User not found");
        }
        return builder.build();
    }
}
