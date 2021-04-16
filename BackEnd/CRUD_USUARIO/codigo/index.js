const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

// define os parametros da conexão
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'sistema_bd',
    multipleStatements: true
});

// tenta realizar a conexao
mysqlConnection.connect((err) => {
    if(!err) {
        console.log('Conectado ao banco de dados com sucesso');
    } else {
        console.log(JSON.stringify(err, undefined, 2));
    }
});

// executa o servidor na porta 3000
app.listen(3000, () => {
    console.log('express server na porta 3000');
});


//Metodo Get: lista todos os usuarios
function listaUsuarios () {
        app.get('/usuarios', (req, res) => {
        mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
            if(!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    })
};

listaUsuarios();

//Metodo Get: mostra o usuario com o id informado
function buscaUsuarioPorId () {
        app.get('/usuarios/:id', (req, res) => {
        mysqlConnection.query('SELECT * FROM usuario WHERE usuario_id = ?', [req.params.id], (err, rows, fields) => {
            if(!err) {
                console.log(rows);
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    })
};

buscaUsuarioPorId();

//Metodo delete: exclui do banco o id informado
function deletaUsuarioPorId () {
        app.delete('/usuarios/:id', (req, res) => {
        mysqlConnection.query('DELETE FROM usuario WHERE usuario_id = ?', [req.params.id], (err, rows, fields) => {
            if(!err) {
                console.log(rows);
                res.send('DELETED');
            } else {
                console.log(err);
            }
        });
    })
};

deletaUsuarioPorId();

//metodo Post: cria um novo usuario
function criaNovoUsuario () {
        app.post('/usuarios/newUser', (req, res) => {
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
};

criaNovoUsuario();

//Metodo Put: edita o usuario
function editaUsuario () {
        app.put('/usuarios/:id', (req, res) => {
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
};

editaUsuario();

