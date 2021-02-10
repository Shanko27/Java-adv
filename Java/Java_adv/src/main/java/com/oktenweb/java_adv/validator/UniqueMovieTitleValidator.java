package com.oktenweb.java_adv.validator;

import com.oktenweb.java_adv.dao.MovieRepository;
import com.oktenweb.java_adv.entity.Movie;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

@NoArgsConstructor
public class UniqueMovieTitleValidator implements ConstraintValidator<UniqueMovieTitle, String> {

    private MovieRepository movieRepository;

@Autowired
    public UniqueMovieTitleValidator(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public void initialize(UniqueMovieTitle constraintAnnotation) {
        SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);
    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
   final Movie movie = movieRepository.findByTitle(s);
        return movie == null;
    }
}
