const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // 파일 '확장자' 추출
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set('view engine', 'ejs');

app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server open on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', uploadDetail.single('userFile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send('파일 업로드 완료!');
});
