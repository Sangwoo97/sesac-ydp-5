const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

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

app.post('/upload', upload.single('userFile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send('파일 업로드 완료!');
});
