package com.oktenweb.java_adv.controller;


import com.oktenweb.java_adv.entity.Director;
import com.oktenweb.java_adv.entity.Movie;
import com.oktenweb.java_adv.service.DirectorService;
import com.oktenweb.java_adv.service.IDirectorService;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/directors")
@Slf4j
public class DirectorController {

    @Autowired
    private IDirectorService directorService;

    @GetMapping
    public List<Director> getAllDirector() {
        return directorService.getAllDirectors();
    }

    @GetMapping("/{id}")
    public Director getMovie(@PathVariable int id) {
        return directorService.getDirectorById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Director createDirector(@RequestBody Director director) {
        log.info("Handled POST request");
        return directorService.saveDirector(director);
    }

    @PutMapping(value = "/{id}")
    public Director updateDirector(@PathVariable int id, @RequestBody @Valid Director director) {
        return directorService.updateDirector(id, director);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDirector(@PathVariable int id) {
        directorService.deleteDirector(id);
    }
}
