const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(
    session({
        secret: 'MySessionSecretKey',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            maxAge: 60 * 1000,
        },
    })
);
// 세션 옵션 객체
// secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값
// resave: 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다기 저장할 것
// saveUninitialized: 세션에 저장할 내역이 없더라고 처음부터 세션을 생성할 지 설정
// httpOnly: http프로토콜에서도 세션 사용가능
// maxage: 쿠키 수명 (단위 ms)

app.listen(PORT, () => {
    console.log(`server open on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('session');
});

app.get('/set', (req, res) => {
    req.session.name = '홍길동';
    res.send('세션 설정 완료');
});

app.get('/name', (req, res) => {
    res.send({ id: req.sessionID, name: req.session.name });
});

app.get('/destroy', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return;
        }

        res.redirect('/name');
    });
});

// 세션 정리
// 1. 세션 설정
// req.session.키 = 값

// 2. 세션 사용
// req.session.키

// 3. 세션 삭제
// req.session.destroy(콜백)
