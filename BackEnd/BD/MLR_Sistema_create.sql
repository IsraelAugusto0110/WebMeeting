-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-03-26 23:53:51.587

-- tables
-- Table: ATA
CREATE TABLE ATA (
    COD_ATA varchar(10) NOT NULL COMMENT 'composto por um numero sequencial + ano de criação. EX: 00000/2021 ',
    DATA_INICIO date NOT NULL COMMENT 'Data da criação da ata',
    DATA_FIM date NOT NULL COMMENT 'Data da ultima revisão, quanto foi enviada para o cliente',
    HORA_INICIO time NOT NULL COMMENT 'Inicio da reunião',
    HORA_FIM time NOT NULL COMMENT 'Hora do encerramento da reunião',
    LOCAL_REUNIAO varchar(15) NOT NULL,
    DESC_PAUTA varchar(30) NOT NULL COMMENT 'O assunto da reunião',
    STATUS_ATA varchar(10) NOT NULL COMMENT 'Pode ser: 
Nova: Ocorre ao gerar uma nova ata de reunião;
Revisada: Ocorre quando os usuários de uma ata adicionam revisões;
Assinada: Ocorre quando uma ata revisada é assinada digitalmente;
Enviada: Ocorre quando uma ata assinada é enviada para o cliente.',
    TEMA varchar(20) NOT NULL COMMENT 'O tema da reunião ou o nome do projeto',
    LINK_PDF varchar(20) NOT NULL,
    LINK_XLS varchar(20) NOT NULL,
    MODELO_ATA_COD_MODELO int NOT NULL,
    CONSTRAINT ATA_pk PRIMARY KEY (COD_ATA)
);

-- Table: CADASTRO
CREATE TABLE CADASTRO (
    USUARIO_COD_USUARIO int NOT NULL,
    MODELO_ATA_COD_MODELO int NOT NULL,
    CONSTRAINT CADASTRO_pk PRIMARY KEY (USUARIO_COD_USUARIO,MODELO_ATA_COD_MODELO)
);

-- Table: CRIA
CREATE TABLE CRIA (
    ATA_COD_ATA varchar(10) NOT NULL COMMENT 'Referencia COD_ATA da tabela ATA',
    USUARIO_COD_USUARIO int NOT NULL COMMENT 'Referencia COD_USUARIO  da tabela USUARIO',
    CONSTRAINT CRIA_pk PRIMARY KEY (USUARIO_COD_USUARIO,ATA_COD_ATA)
);

-- Table: MODELO_ATA
CREATE TABLE MODELO_ATA (
    COD_MODELO int NOT NULL,
    DATA_INCLUSAO date NOT NULL,
    STATUS_APROVACAO varchar(10) NOT NULL COMMENT 'Qualquer usuario pode sugerir modelos de atas, porém apenas gerentes e administradores podem aprovar o modelo',
    DESC_MODELO varchar(20) NOT NULL,
    LINK_ARQUIVO varchar(20) NOT NULL,
    NOME_FUNCIONARIO varchar(20) NOT NULL COMMENT 'O nome do funcionário responsável por analisar e aprovar ou não o modelo.',
    CONSTRAINT MODELO_ATA_pk PRIMARY KEY (COD_MODELO)
) COMMENT 'Todo modelo deve ter os campos descritos na tabela ATA. O modelo pode variar de acordo com a solicitação do cliente que contratou o projeto, podendo ter outras informações. 
Além disto, pode haver um modelo especifico para cada departamento';

-- Table: REVISAO
CREATE TABLE REVISAO (
    ATA_COD_ATA varchar(10) NOT NULL COMMENT 'Referencia COD_ATA da tabela ATA',
    USUARIO_COD_USUARIO int NOT NULL COMMENT 'Referencia COD_USUARIO da tabela USUARIO',
    DATA_ULTIMA_REVISAO date NOT NULL,
    CONSTRAINT REVISAO_pk PRIMARY KEY (USUARIO_COD_USUARIO,ATA_COD_ATA)
) COMMENT 'Histórico das revisões. Apenas administradores podem adicionar.';

-- Table: USUARIO
CREATE TABLE USUARIO (
    COD_USUARIO int NOT NULL AUTO_INCREMENT,
    NOME varchar(20) NOT NULL,
    EMAIL varchar(30) NOT NULL,
    TELEFONE varchar(10) NOT NULL,
    CARGO varchar(15) NOT NULL COMMENT 'Ex: contador, gerente de rh, desenvolvedor java etc',
    DEPARTAMENTO varchar(15) NOT NULL COMMENT 'EX: administrativo, pesquisa e desenvolvimento, marketing, comercial, etc. ',
    PERFIL_USUARIO varchar(10) NOT NULL COMMENT 'Pode ser um usuário padrão, um gerente ou administrador com acesso total ao sistema',
    CONSTRAINT USUARIO_pk PRIMARY KEY (COD_USUARIO)
);

-- foreign keys
-- Reference: ATA_MODELO_ATA (table: ATA)
ALTER TABLE ATA ADD CONSTRAINT ATA_MODELO_ATA FOREIGN KEY ATA_MODELO_ATA (MODELO_ATA_COD_MODELO)
    REFERENCES MODELO_ATA (COD_MODELO);

-- Reference: CADASTRO_MODELO_ATA (table: CADASTRO)
ALTER TABLE CADASTRO ADD CONSTRAINT CADASTRO_MODELO_ATA FOREIGN KEY CADASTRO_MODELO_ATA (MODELO_ATA_COD_MODELO)
    REFERENCES MODELO_ATA (COD_MODELO);

-- Reference: CADASTRO_USUARIO (table: CADASTRO)
ALTER TABLE CADASTRO ADD CONSTRAINT CADASTRO_USUARIO FOREIGN KEY CADASTRO_USUARIO (USUARIO_COD_USUARIO)
    REFERENCES USUARIO (COD_USUARIO);

-- Reference: REVISAO_ATA (table: REVISAO)
ALTER TABLE REVISAO ADD CONSTRAINT REVISAO_ATA FOREIGN KEY REVISAO_ATA (ATA_COD_ATA)
    REFERENCES ATA (COD_ATA);

-- Reference: REVISAO_USUARIO (table: REVISAO)
ALTER TABLE REVISAO ADD CONSTRAINT REVISAO_USUARIO FOREIGN KEY REVISAO_USUARIO (USUARIO_COD_USUARIO)
    REFERENCES USUARIO (COD_USUARIO);

-- Reference: Table_5_ATA (table: CRIA)
ALTER TABLE CRIA ADD CONSTRAINT Table_5_ATA FOREIGN KEY Table_5_ATA (ATA_COD_ATA)
    REFERENCES ATA (COD_ATA);

-- Reference: Table_5_USUARIO (table: CRIA)
ALTER TABLE CRIA ADD CONSTRAINT Table_5_USUARIO FOREIGN KEY Table_5_USUARIO (USUARIO_COD_USUARIO)
    REFERENCES USUARIO (COD_USUARIO);

-- End of file.

