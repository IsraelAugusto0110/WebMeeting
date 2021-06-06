const mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'sistema_bd',
    multipleStatements: true
});

db.connect((err) => {
    if (!err) {
        console.log('Conectado ao banco de dados com sucesso');
    } else {
        console.log(JSON.stringify(err, undefined, 2));
    }
});

const select = (req, res) => {
    const sqlSelect = 'SELECT * FROM usuario';
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
};

const insert =  (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const cargo = req.body.cargo;
    const departamento = req.body.departamento;
    const perfil = req.body.perfil;

    const sqlInsert = 'INSERT INTO usuario (nome, email, telefone, cargo, departamento, perfil) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sqlInsert, [nome, email, telefone, cargo, departamento, perfil], (err, result) => {
        console.log(result.body);
    });

};

const deleteUser = (req, res) => {
    const { id } = req.body.id;

    const sqlDel = 'DELETE FROM usuario WHERE id=?';

    db.query(sqlDel, [id],(err, rows, result) => {
        if(!err) {
            console.log(rows);
            res.send('DELETED');
        } else {
            console.log(err);
        }
    })
};

const update = (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    const sqlupdate = 'UPDATE SET usuario email = ? WHERE nome = ?';

    db.query(sqlupdate, [email, nome],(err, result) => {
        if(err) {
            console.log(err);
        }
    })
}

module.exports = {
    select,
    insert,
    deleteUser,
    update
};