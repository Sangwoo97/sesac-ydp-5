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

exports.postVisitor = (data, cb) => {
    conn.query(`INSERT INTO visitor (name, comment) VALUES("${data.name}", "${data.comment}")`, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows.insertId);
    });
};
