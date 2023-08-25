const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`server open on port ${PORT}`);
});

app.get('*', (req, res) => {
    res.render('404');
});
