const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server open on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('dynamic');
});

app.get('/ajax', (req, res) => {
    res.send(req.query);
});

app.get('/axios', (req, res) => {
    res.send(req.query);
});

app.post('/ajax', (req, res) => {
    res.send(req.body);
});

app.post('/axios', (req, res) => {
    res.send(req.body);
});

app.get('/fetch', (req, res) => {
    res.send(req.query);
});

app.post('/fetch', (req, res) => {
    res.send(req.body);
});

app.post('/prac', (req, res) => {
    const id = 'sesac';
    const pw = '1234';
    if (req.body.id !== id) {
        res.send({ error: '아이디가 올바르지 않습니다.' });
    } else if (req.body.pw !== pw) {
        res.send({ error: '비밀번호가 올바르지 않습니다.' });
    } else {
        res.send({ result: '로그인 성공!' });
    }
});
