package com.oktenweb.java_adv.dto;

import com.oktenweb.java_adv.dto.MovieDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class MoviePageDto {

    private List<MovieDto> movies;
    private int totalPages;
}
