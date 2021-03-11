# WebMeeting
Sistema web para gerenciamento de reuniões, utilizando Java e banco de dados

## Projeto integrador - Requisitos do cliente
### Curso: Análise e Desenvolvimento de Sistemas (ADS)
### Tema do Semestre: CRUD Sistema Web com regra de negócio complexa em ambiente de produção (Deploy).

### Conhecimentos exigidos no Semestre (Hard Skills):
* Padrões de projeto(Design patterns);
* Testes de software / Qualidade de Software;
* Tratamento de exceções;
* Banco de dados;
* Programação orientada a objetos(web);
* Testes de software / Qualidade de Software;
* Docker;
* Estatística aplicada;
* Medidas de estimativas de custo, prazo e esforço baseadas em técnicas e padrões de mercado.


## Informações da Empresa Parceira
### Problema (Desafio):
Desenvolver um sistema de Gestão de Atas de Reunião visando as funcionalidades de cadastro, controle de acesso, logs de execução, geração e monitoramento de ata de reunião e assinatura digital. Adicionalmente, relatórios analíticos são pontos interessantes de agregação de valor ao projeto.

### Requisitos Funcionais:
• Cadastros de Usuários, Cadastro de Perfil de Acesso; Cadastro de Modelo de Ata de Reunião;
o O cadastro de usuário deve conter os seguintes campos: Nome, Título/Cargo, Área/Empresa, E-mail e Telefone;
o Todo usuário deve ter pelo menos um perfil de acesso;
o O perfil de acesso define quais funcionalidades o usuário pode acessar, sendo:
▪ Administrador;
Acesso total ao sistema.
▪ Usuário;
Acesso ao cadastro do modelo de ata de reunião, a geração de ata de reunião, ao monitoramento de ata de reunião e à imprimir ata de reunião em PDF e Excel.
▪ Gerência;
Acesso aos relatórios do sistema, à aprovação do modelo de ata de reunião e a imprimir ata de reunião em PDF e Excel.
o A aplicação deve ter pelo menos um usuário administrador o qual não pode ser excluído;
o O cadastro de modelo de ata de reunião deve conter os campos apresentados no Anexo A.
• Login; Logout;
• Gerar Ata de Reunião;
o Toda ata de reunião deve seguir um modelo definido pelo usuário;
o Toda ata de reunião deve ter um identificador exclusivo: <Número Único Incremental/Sufixo do Ano Corrente> Ex.: 100/20;
o O Anexo A apresenta o modelo de ata de reunião a ser utilizado.
• Adicionar Revisão;
o Uma revisão só exista quando uma ata é gerada;
o Uma revisão é composta pelas seguintes informações: ID da Revisão, Assunto da Revisão, Responsável da Revisão e Prazo da Revisão;
o Revisões pode ser incluídas, alteradas e excluídas quantas vezes forem necessárias considerando inclusive registros de logs.
• Monitorar Ata de Reunião;
o Deve ser exibida uma listagem com a situação es todas as atas de reunião. Esta listagem deve possuir filtros: Por Estado, Por Data de Criação da Ata e Por Pauta;
o A listagem pode ser ordenada de forma crescente e decrescente;
o Uma Ata de Reunião pode ter os seguintes estados: Nova, Revisada, Assinada, Enviada. Sendo:
▪ Nova: Ocorre ao gerar uma nova ata de reunião;
▪ Revisada: Ocorres quando os usuários de uma ata adicionam revisões;
▪ Assinada: Ocorre quando uma ata revisada é assinada digitalmente;
▪ Enviada: Ocorre quando uma ata assinada é enviada para o cliente.

### Requisitos Não Funcionais:
Backend: Java (sugerido);
• Frontend: HTML 5, CSS 3, JS, Angular ou React;
• Ser usual em dispositivos móveis;
• Estar disponível no idioma Português do Brasil;
• Documentações (preenchimento da empresa parceira)
o Especificação de Software com Lista de Requisitos, Diagrama de Contexto, Casos de Uso com Descrição, Diagrama de Atividades e Diagrama de Implantação;
o Registros de testes de todas as funcionalidades;
o Manual de usuário com prints de telas e explicação das funcionalidades;
o Release Notes da aplicação;
o Source Code documentado.C
