package com.oktenweb.java_adv.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity // Обязательно
//@Table // Переименовать табл. не обязательно
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    // @Column // дополнительные свойства колонок. не обязательно
    @Column(name = "movie_title")
    @NotBlank
//    @UniqueMovieTitle
    private String title;
    @Positive
    @Max(value= 210)
    private int duration;


    @ManyToOne(targetEntity = Director.class, fetch = FetchType.LAZY)
    @JsonIgnore
    private Director director;

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", duration=" + duration +
                '}';
    }
}
