package com.oktenweb.java_adv.controller;


import com.oktenweb.java_adv.dto.MovieCreateDto;
import com.oktenweb.java_adv.dto.MovieDirectorDto;
import com.oktenweb.java_adv.dto.MovieDto;
import com.oktenweb.java_adv.entity.Director;
import com.oktenweb.java_adv.entity.Movie;
import com.oktenweb.java_adv.service.MovieService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.BDDMockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;

@ExtendWith(SpringExtension.class)
@WebMvcTest(MovieController.class)
public class MovieControllerTest {

    @MockBean
    private MovieService movieService;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void givenDirectorNameWhenGettingMoviesThenReturnResponseWithMovies() throws Exception {
        Movie movie1 = new Movie();
        movie1.setId(1);
        movie1.setTitle("Title1");
        Movie movie2 = new Movie();
        movie2.setId(1);
        movie2.setTitle("Title2");

        final String directionName = "Tarantino";
        Director director = new Director();
        director.setId(1);
        director.setName(directionName);
        director.setMovies(Arrays.asList(movie1, movie2));

        MovieDto movieDto1 = new MovieDto(movie1.getId(), movie1.getTitle(), 0, directionName);
        MovieDto movieDto2 = new MovieDto(movie2.getId(), movie2.getTitle(), 0, directionName);

        MovieDirectorDto expected = new MovieDirectorDto(1, Arrays.asList(movieDto1, movieDto2));
        BDDMockito.given(movieService.getMoviesByDirectorName(ArgumentMatchers.anyString()))
                .willReturn(expected);

        mockMvc.perform(MockMvcRequestBuilders.get("/movies/director/{name}", directionName))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.director_id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.movies[0].directorName").value("Tarantino"));
    }

    @Test
    public void giveMoviesJsonBodyWhenCallingPostRequestThenReturnResponseWithJson() throws Exception {
        MovieDto movie = new MovieDto(1,"Title 1", 1, "Tarantino");
        BDDMockito.given(movieService.saveMovie(ArgumentMatchers.any(MovieCreateDto.class)))
                .willReturn(movie);

        mockMvc.perform(MockMvcRequestBuilders.post("/movies")
        .content("{\n"
                +" \"title\": \"title1\",\n"
                +" \"duration\": 1,\n"
                +" \"directorId\": 1\n"
                +"}")
        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.movieId").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.directorName").value("Tarantino"));

    }

}
