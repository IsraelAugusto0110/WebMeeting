//Cria e executa o servidor na porta 3000

const express = require('express');
var app = express();
const bodyparser = require('body-parser');
var cors = require('cors')

//const mysqlConnection = require('./connection');
const userRoutes = require('./routes/usuario');
const ataRoutes = require('./routes/ata');
const modeloRoutes = require('./routes/modeloAta');

app.use(bodyparser.json());
app.use('/', userRoutes);
app.use('/', ataRoutes);
app.use('/', modeloRoutes);
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }) 


// executa o servidor na porta 3000
app.listen(3001, () => {
    console.log('express server na porta 3000');
});

module.exports = app;