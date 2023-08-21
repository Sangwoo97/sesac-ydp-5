const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

// TODO: multer 관련 설정

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uploadDetail = multer({
    // done(null, xx) : null은 error를 의미하는 매개변수 -> null = 에러없음
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // 파일 '확장자' 추출
            done(null, req.body.username + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
// 2. static/ 폴더 접근 가능하도록

// TODO: 라우터 정의
// 1. GET /: index.ejs render
// 2. POST /result: result.ejs render

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', uploadDetail.single('profile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.render('result', { userInfo: req.body, imgPath: req.file.path });
});
