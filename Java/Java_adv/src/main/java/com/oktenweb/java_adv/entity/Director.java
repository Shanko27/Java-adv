package com.oktenweb.java_adv.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Director {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
//    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

@OneToMany (mappedBy = "director", fetch = FetchType.LAZY)
//@JoinColumn(name = "director_id_jpa")
    private List<Movie> movies = new LinkedList<>();

    @Override
    public String toString() {
        return "Director{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", birthDate=" + birthDate +
                '}';
    }
}
