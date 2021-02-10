package com.oktenweb.java_adv.service;

import com.oktenweb.java_adv.dao.DirectorRepository;
import com.oktenweb.java_adv.dao.MovieRepository;
import com.oktenweb.java_adv.dto.*;
import com.oktenweb.java_adv.entity.Director;
import com.oktenweb.java_adv.entity.Movie;
import org.apache.commons.lang3.CharUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MovieService implements IMovieService {

    private MovieRepository movieRepository;
    private DirectorRepository directorRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository, DirectorRepository directorRepository) {
        this.movieRepository = movieRepository;
        this.directorRepository = directorRepository;
    }

    @Override
    public MovieDto saveMovie( MovieCreateDto movie) {
        final char firstLetter = movie.getTitle().charAt(0);
        if (!CharUtils.isAsciiAlphaUpper(firstLetter)){
            throw new BadRequestException("Title letter");
        }
        Movie movieEntity = new Movie();
        movieEntity.setTitle(movie.getTitle());
        movieEntity.setDuration(movie.getDuration());
        final Optional<Director> director = directorRepository.findById(movie.getDirectorId());
        final Director existingDirector = director.orElseThrow(() -> new BadRequestException("No director with such id"));
movieEntity.setDirector(existingDirector);
        return convertToMovieDto(movieRepository.saveAndFlush(movieEntity));
    }

    @Override
    public MoviePageDto getAllMovies(PageRequest pageRequest) {
        final Page<Movie> moviePage = movieRepository.findAll(pageRequest);

        final List<MovieDto> movies = moviePage.stream().map(movie ->
                new MovieDto(movie.getId(), movie.getTitle(), movie.getDuration(), movie.getDirector().getName())
        ).collect(Collectors.toList());
        return new MoviePageDto(movies, moviePage.getTotalPages());
    }

    @Override
    public MovieDto getMovieById(int id) {
        return convertToMovieDto(movieRepository.getOne(id));
    }

    @Override
    public void deleteMovie(int id) {
movieRepository.deleteById(id);
    }

    @Override
    public Movie updateMovie(int id, Movie movie) {
        if (movieRepository.existsById(id)){
            movie.setId(id);
            return movieRepository.saveAndFlush(movie);
        } else {
            throw new IllegalArgumentException("No novie with such id: " + id);
        }
    }

    @Override
    public MovieDirectorDto getMoviesByDirectorName(String name) {
        final Director director = directorRepository.findMoviesByDirectorname(name);
        final String directorName = director.getName();
        final int directorId = director.getId();
        final List<Movie> movies = director.getMovies();
        final List<MovieDto> movieDtos = movies.stream().map(movie -> new MovieDto(movie.getId(), movie.getTitle(), movie.getDuration(), directorName))
                .collect(Collectors.toList());
        return new MovieDirectorDto(directorId, movieDtos);
    }

    private MovieDto convertToMovieDto(Movie movie){
        return new MovieDto(movie.getId(), movie.getTitle(), movie.getDuration(), movie.getDirector().getName());
    }
}
