//Define as rotas para a utilização dos metodos Http com a tabela usuario

const express = require('express');
const mysqlConnection = require('../connection');

const Router = express.Router();



//Retorna todos os usuarios cadastrados
Router.get('/usuarios',(req, res) => {
    var sql = 'SELECT * FROM usuario';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});


//Retorna o usuario pelo id
Router.get('/usuarios/:id',(req, res) => {
    var sql = 'SELECT * FROM usuario WHERE usuario_id = ?';
    mysqlConnection.query(sql, [req.params.id], (err, rows, fields) => {
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Cria um novo usuario
Router.post('/usuarios/add', (req, res) => {
    let usuario = req.body;
    // comando sql
    var sql = "SET @usuario_id = ?; SET @usuario_nome = ?; SET @usuario_email = ?; \
    SET @usuario_telefone = ?; SET @usuario_cargo = ?; SET @usuario_departamento = ?; \
    SET @usuario_perfil = ?; \
    CALL usuarioAdicionar(@usuario_id, @usuario_nome, @usuario_email, \
        @usuario_telefone, @usuario_cargo,  @usuario_departamento, @usuario_perfil);";

    // executa o comando sql criado anteriormente
    mysqlConnection.query(sql, [usuario.usuario_id, usuario.usuario_nome, usuario.usuario_email,
        usuario.usuario_telefone, usuario.usuario_cargo, usuario.usuario_departamento, usuario.usuario_perfil], 
        (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
})


//Edita usuario
Router.put('/usuarios/:id', (req, res) => {
    let usuario = req.body;
    
    var sql = "SET @usuario_id = ?; SET @usuario_nome = ?; SET @usuario_email = ?; \
    SET @usuario_telefone = ?; SET @usuario_cargo = ?; SET @usuario_departamento = ?; \
    SET @usuario_perfil = ?; \
    CALL usuarioEditar(@usuario_id, @usuario_nome, @usuario_email, \
        @usuario_telefone, @usuario_cargo,  @usuario_departamento, @usuario_perfil);";

    
    mysqlConnection.query(sql, [usuario.usuario_id, usuario.usuario_nome, usuario.usuario_email,
        usuario.usuario_telefone, usuario.usuario_cargo, usuario.usuario_departamento, usuario.usuario_perfil],
        (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
})


//Deleta usuario
Router.delete('/usuarios/:id', (req, res) => {
    var sql = 'DELETE FROM usuario WHERE usuario_id = ?';
    mysqlConnection.query(sql, [req.params.id], (err, rows, fields) => {
        if(!err) {
            console.log(rows);
            res.send('DELETED');
        } else {
            console.log(err);
        }
    });
})

module.exports = Router;