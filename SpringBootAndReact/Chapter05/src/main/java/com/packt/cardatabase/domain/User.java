package com.packt.cardatabase.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "user")
@Entity
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private  Long id;

    @Column(nullable = false, unique = false)
    private String username;

    @Getter
    @Column(nullable = false)
    private String password;

    @Getter
    @Column(nullable = false)
    private String role;


    public  User(String username, String password, String role){
        super();;
        this.username = username;
        this.password = password;
        this.role = role;
    }

}
