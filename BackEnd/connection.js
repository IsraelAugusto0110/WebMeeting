//Define os parametros e faz a conexao com o banco de dados

const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'sistema_bd',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err) {
        console.log('Conectado ao banco de dados com sucesso');
    } else {
        console.log(JSON.stringify(err, undefined, 2));
    }
});

module.exports = mysqlConnection;