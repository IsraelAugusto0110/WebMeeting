

CREATE TABLE Usuario (
    usuario_id int NOT NULL AUTO_INCREMENT,
    usuario_nome varchar(100) NOT NULL,
    usuario_email varchar(100) NOT NULL,
    usuario_telefone varchar(15) NOT NULL,
    usuario_cargo varchar(30) NOT NULL,
    usuario_departamento varchar(30) NOT NULL,
    usuario_perfil varchar(30) NOT NULL,
    CONSTRAINT Usuario_pk PRIMARY KEY (usuario_id)
);