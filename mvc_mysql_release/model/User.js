// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'codingon',
});

exports.postUser = (data, cb) => {
    conn.query(
        `INSERT INTO user (userid, name, pw) VALUES ('${data.id}', '${data.name}', '${data.pw}');`,
        (err, rows) => {
            if (err) {
                throw err;
            }
            cb(rows);
        }
    );
};

exports.loginUser = (data, cb) => {
    conn.query(`Select * from user where userid='${data.id}' and pw='${data.pw}'`, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows);
    });
};

exports.getUser = (id, cb) => {
    conn.query(`Select * from user where userid='${id}'`, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows);
    });
};

exports.patchUser = (data, cb) => {
    const sql = `update user set name='${data.name}', pw='${data.pw}' where userid='${data.id}'`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows);
    });
};

exports.deleteUser = (id, cb) => {
    const sql = `delete from user where userid='${id}'`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows);
    });
};
