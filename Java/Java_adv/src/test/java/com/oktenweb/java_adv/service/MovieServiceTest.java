package com.oktenweb.java_adv.service;

import com.oktenweb.java_adv.dao.DirectorRepository;
import com.oktenweb.java_adv.dao.MovieRepository;
import com.oktenweb.java_adv.dto.MovieDirectorDto;
import com.oktenweb.java_adv.dto.MovieDto;
import com.oktenweb.java_adv.entity.Director;
import com.oktenweb.java_adv.entity.Movie;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.util.Assert;

import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
public class MovieServiceTest {

    @Mock
    private MovieRepository movieRepository;

    @Mock
    private DirectorRepository directorRepository;

    @InjectMocks
    private MovieService movieService;

    @Test
    public void giveDirectorNameWhenGettingmoviesByDirectorNameThenReturnMovieDirectorDto(){
        Movie movie1 = new Movie();
        movie1.setId(1);
        movie1.setTitle("Title 1");
        Movie movie2 = new Movie();
        movie2.setId(2);
        movie2.setTitle("Title2");
final String directorName = "Tarantino";
        Director director = new Director();
        director.setId(1);

        director.setMovies(Arrays.asList(movie1, movie2));
        Mockito.when(directorRepository.findMoviesByDirectorname(ArgumentMatchers.anyString()))
                .thenReturn(director);
        MovieDto movieDto1 = new MovieDto(movie1.getId(), movie1.getTitle(),0, directorName);
        MovieDto movieDto2 = new MovieDto(movie2.getId(), movie2.getTitle(),0, directorName);
        MovieDirectorDto expected = new MovieDirectorDto(1, Arrays.asList(movieDto1, movieDto2));

        final MovieDirectorDto actual = movieService.getMoviesByDirectorName(directorName);

        Assertions.assertThat(expected.getMovies().size());
        Assertions.assertThat(actual.getMovies().size());
    }
}
