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
        cb(rows);
    });
};

exports.getVisitor = (id, cb) => {
    conn.query(`SELECT * FROM visitor where id = ${id}`, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows[0]);
    });
};

exports.updateVisitor = (updateData, cb) => {
    const { name, comment, id } = updateData;
    const sql = `update visitor set name='${name}', comment='${comment}' where id=${id}`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
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

exports.postVisitor = (data, cb) => {
    conn.query(`INSERT INTO visitor (name, comment) VALUES("${data.name}", "${data.comment}")`, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows.insertId);
    });
};
