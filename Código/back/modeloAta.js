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
    const sqlSelect = 'SELECT * FROM novaata';
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
};

const insert =  (req, res) => {
    const local = req.body.local;
    const pauta = req.body.pauta;
    const status = req.body.status;
    const tema = req.body.tema;


    const sqlInsert = 'INSERT INTO novaata (local, pauta, status, tema) VALUES (?, ?, ?, ?)';
    db.query(sqlInsert, [local, pauta, status, tema], (err, result) => {
        console.log(result.body);
    });

};

const deleteAta = (req, res) => {
    const { id } = req.body.id;

    const sqlDel = 'DELETE FROM novaata WHERE id=?';

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

    const sqlupdate = 'UPDATE SET novaata email = ? WHERE nome = ?';

    db.query(sqlupdate, [email, nome],(err, result) => {
        if(err) {
            console.log(err);
        }
    })
}

module.exports = {
    select,
    insert,
    deleteAta,
    update
};