const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac',
});

exports.getVisitors = (cb) => {
    conn.query(`SELECT * FROM visitor`, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('mode >> ', rows);
        cb(rows);
    });
};

exports.deleteVisitor = (id, cb) => {
    conn.query(`delete from visitor where id=${id}`, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(true);
    });
};
