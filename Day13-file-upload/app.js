const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const uploadDetail = multer({
  // done(null, xx) : null은 error를 의미하는 매개변수 -> null = 에러없음
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
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server open on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', uploadDetail.single('profile'), (req, res) => {
  res.send('파일 업로드 완료!');
});

app.post('/result', uploadDetail.single('userFile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send('파일 업로드 완료!');
});

app.post('/upload/array', uploadDetail.array('userFiles'), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send('하나의 인풋에 여러 파일 업로드 완료!');
});

app.post('/upload/fields', uploadDetail.fields([{ name: 'userFile1' }, { name: 'userFile2' }]), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send('여러개의 인풋에 여러 파일 업로드 완료!');
});

app.post('/dynamicFile', uploadDetail.single('dynamicUserFile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send(req.file);
});
