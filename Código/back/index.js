const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//Adiciona as funções do crud de usuario
const user = require('./modeloUsuario');

//Crud da Ata
const ata = require('./modeloAta');

app.use(bodyparser.urlencoded({extended: true}));

//Rotas Usuario

//Seleciona todos os usuarios
app.get('/api/getUsers', user.select);

//Insere um novo usuario
app.post('/api/insertUsers', user.insert);

//Deleta o usuario
app.get('/api/delUsers', user.deleteUser);

//Atualiza o usuario
app.put('/api/updateUser', user.update);



//Rotas Ata
app.get('/api/getAtas', ata.select);

//Insere um novo usuario
app.post('/api/insertAta', ata.insert);

//Deleta o usuario
app.get('/api/delAta', ata.deleteAta);

//Atualiza o usuario
app.put('/api/updateAta', ata.update);


app.listen(3001, () => {
    console.log('Express server on port 3001');
});