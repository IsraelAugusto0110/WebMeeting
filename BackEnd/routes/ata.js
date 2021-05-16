//Define as rotas para a utilização dos metodos Http com a tabela ata

const express = require('express');
const mysqlConnection = require('../connection');

const Router = express.Router();



//Retorna todas atas
Router.get('/atas',(req, res) => {
    var sql = 'SELECT * FROM ata';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});


//Retorna ata com o id
Router.get('/atas/:id',(req, res) => {
    var sql = 'SELECT * FROM ata WHERE ata_id = ?';
    mysqlConnection.query(sql, [req.params.id], (err, rows, fields) => {
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Cria nova ata
Router.post('/atas/add', (req, res) => {
    let ata = req.body;
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


//Edita ata
Router.put('/atas/:id', (req, res) => {
    let ata = req.body;
    
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


//Deleta ata
Router.delete('/atas/:id', (req, res) => {
    var sql = 'DELETE FROM usuario WHERE ata_id = ?';
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