package com.example.projetobackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projetobackend.exception.ResourceNotFoundException;
import com.example.projetobackend.model.AssuntoAta;
import com.example.projetobackend.repository.AssuntoRepository;

@RestController
@RequestMapping("/api/v1/")
public class Assuntocontroller {
	@Autowired
	private AssuntoRepository assuntoRepository;
	
	//retorna todos os itens em assunto
	@GetMapping("/assuntos")
	public List<AssuntoAta> getAllAssuntoAta() {
		return assuntoRepository.findAll();
	}
	
	//Insere um novo assunto
	@PostMapping("/assuntos")
	public AssuntoAta createAssuntoAta(@RequestBody AssuntoAta assuntoAta) {
		return assuntoRepository.save(assuntoAta);
	}
	
	//retorna o assunto com o id
	@GetMapping("/assuntos/{id}")
	public ResponseEntity<AssuntoAta> getAssuntoById(@PathVariable Long id) {
		AssuntoAta assuntoAta = assuntoRepository.findById(id)
				.orElseThrow( () -> new ResourceNotFoundException("Não foi possivel localizar o id: " + id));
		return ResponseEntity.ok(assuntoAta);
	}
	
	//atualiza/edita o assunto por id
	@PutMapping("assuntos/{id}")
	public ResponseEntity<AssuntoAta> updateAssuntoById(@PathVariable("id") Long id, @RequestBody AssuntoAta detalhesAssunto){
		AssuntoAta assuntoAta = assuntoRepository.findById(id)
				.orElseThrow( () -> new ResourceNotFoundException("Não foi possivel localizar o id: " + id));
		assuntoAta.setAssunto(detalhesAssunto.getAssunto());
		assuntoAta.setNome(detalhesAssunto.getNome());
		assuntoAta.setPrazo(detalhesAssunto.getPrazo());
		
		AssuntoAta updateAssuntoAta = assuntoRepository.save(assuntoAta);
		return ResponseEntity.ok(updateAssuntoAta);
	}
	
	//Deletar assunto pelo id
	@DeleteMapping("/assuntos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAssuntoById(@PathVariable Long id){
		AssuntoAta assuntoAta = assuntoRepository.findById(id)
				.orElseThrow( () -> new ResourceNotFoundException("Não foi possivel localizar o id: " + id));
		
		assuntoRepository.delete(assuntoAta);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Assunto deletado com sucesso", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
