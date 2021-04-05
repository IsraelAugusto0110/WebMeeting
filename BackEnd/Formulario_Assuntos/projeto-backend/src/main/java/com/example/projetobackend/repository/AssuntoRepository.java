package com.example.projetobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projetobackend.model.AssuntoAta;

@Repository
public interface AssuntoRepository extends JpaRepository<AssuntoAta, Long>{

}
