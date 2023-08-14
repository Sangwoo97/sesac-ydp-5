const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`${PORT} is open!`);
});

// Post 요청으로 들어오는 모든 형식의 데이터 파싱
app.use(express.urlencoded({ extended: true }));
// json 형식으로 데이터 주고받음
app.use(express.json());

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('index', { title: '폼 전송을 연습해보자' });
});

app.get('/getForm', (req, res) => {
    console.log(req.query);

    res.render('result', { title: 'GET', userInfo: req.query });
});

app.get('/get', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result', { title: 'POST', userInfo: req.body });
});
