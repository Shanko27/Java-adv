package com.oktenweb.java_adv.dao;

import com.oktenweb.java_adv.entity.Director;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DirectorRepository extends JpaRepository<Director, Integer> {

    @Query("select d from Director d join fetch d.movies where d.name like :name")
    Director findMoviesByDirectorname(String name);
}
