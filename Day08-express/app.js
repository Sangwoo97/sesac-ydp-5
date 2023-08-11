const express = require('express');
const app = express();
const PORT = 8080;

console.log(__dirname);
app.set('view engine', 'ejs');
// app.set('views', './views');
app.use('/views', express.static(__dirname + '/views'));
app.use('/public', express.static(__dirname + '/static')); // static 미들웨어 등록

// 임시 DB정보
const idFromDB = 'banana';
const pwFromDB = '1234qwer';

app.get('/', (req, res) => {
    // res.send('Hello Express !');

    res.render('index', { userId: idFromDB, userPw: pwFromDB, btns: ['버튼1', '버튼2', '버튼3'], isLogin: true });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

// app.get('/sesac', (req, res) => {
//     res.send('sesac들어옴');
// });

app.listen(PORT, () => {
    console.log(`server listening on ${PORT} port`);
});
