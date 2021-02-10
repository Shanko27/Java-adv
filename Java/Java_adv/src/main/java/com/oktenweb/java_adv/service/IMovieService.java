package com.oktenweb.java_adv.service;

import com.oktenweb.java_adv.dto.MovieCreateDto;
import com.oktenweb.java_adv.dto.MovieDirectorDto;
import com.oktenweb.java_adv.dto.MovieDto;
import com.oktenweb.java_adv.dto.MoviePageDto;
import com.oktenweb.java_adv.entity.Movie;
import org.springframework.data.domain.PageRequest;

public interface IMovieService {

    MovieDto saveMovie( MovieCreateDto movie);

    MoviePageDto getAllMovies(PageRequest pageRequest);

    MovieDto getMovieById(int id);

    void  deleteMovie(int id);

    Movie updateMovie(int id, Movie movie);

    MovieDirectorDto getMoviesByDirectorName(String name);
}
