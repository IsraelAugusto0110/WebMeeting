package com.example.projetobackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "assuntos")
public class AssuntoAta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "assunto")
	private String assunto;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "prazo")
	private String prazo;
	
	public AssuntoAta () {
		
	}

	public AssuntoAta(String assunto, String nome, String prazo) {
		super();
		this.assunto = assunto;
		this.nome = nome;
		this.prazo = prazo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAssunto() {
		return assunto;
	}

	public void setAssunto(String assunto) {
		this.assunto = assunto;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getPrazo() {
		return prazo;
	}

	public void setPrazo(String prazo) {
		this.prazo = prazo;
	}
	
	
}
