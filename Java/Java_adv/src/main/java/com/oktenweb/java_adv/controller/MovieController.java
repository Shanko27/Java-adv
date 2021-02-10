package com.oktenweb.java_adv.controller;

import com.oktenweb.java_adv.dto.MovieCreateDto;
import com.oktenweb.java_adv.dto.MovieDirectorDto;
import com.oktenweb.java_adv.dto.MovieDto;
import com.oktenweb.java_adv.dto.MoviePageDto;
import com.oktenweb.java_adv.entity.Movie;
import com.oktenweb.java_adv.service.IMovieService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(value = "/movies")
@Slf4j
public class MovieController {

//    private List<Movie> movies = new ArrayList<>();
//    {
//        movies.add(new Movie(1, "LoTR", 186));
//        movies.add(new Movie(2, "Harry", 131));
//        movies.add(new Movie(3, "Deadpool", 115));
//    }
    @Autowired
   private IMovieService movieService;

//    private static Logger logger = LoggerFactory.getLogger(MovieController.class);


//    @RequestMapping(value = "/movies", method = RequestMethod.GET)
//@GetMapping (value = "/movies")
@GetMapping
    public MoviePageDto getAllMovies(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "3") int size){
        return movieService.getAllMovies(PageRequest.of(page, size));
}

@GetMapping("/director/{name}")
public MovieDirectorDto getMoviesByDirectorName(@PathVariable String name){
    return movieService.getMoviesByDirectorName(name);
}

    @GetMapping("/{id}")
    public MovieDto getMovies(@PathVariable int id, HttpServletRequest request, Principal principal){

return movieService.getMovieById(id);
    }

@PostMapping
@ResponseStatus(HttpStatus.CREATED)
    public MovieDto createMovie(@RequestBody @Valid MovieCreateDto movie){
    log.info("Handled POST request");
//    logger.info("Handled POST request");
        return movieService.saveMovie(movie);

}

@PutMapping(value = "/{id}")
    public Movie updateMovie(@PathVariable int id, @RequestBody @Valid Movie movie){
//   final Optional<Movie> moviOptional = movieRepository.findById(id);
//   if (!moviOptional.isPresent()){
//       try {
//           throw new IllegalAccessException("No movie with such id: " + id);
//       } catch (IllegalAccessException e) {
//           e.printStackTrace();
//       }
//   }
//   movie.setId(id);
//   return movieRepository.saveAndFlush(movie);
    return movieService.updateMovie(id,movie);

}
@DeleteMapping(value = "/{id}")
@ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMovie(@PathVariable int id){
    movieService.deleteMovie(id);
}

//@InitBinder
//    public void  initBinder(WebDataBinder webDataBinder){
//    webDataBinder.addValidators(new MovieValidator());}
}
//        /movies
//        C(create) R(read) U(update) D(delete)
//    MySQL: Insert Select  update     delete
//    RESR:  POST   GET     PUT/PATCH  DELET