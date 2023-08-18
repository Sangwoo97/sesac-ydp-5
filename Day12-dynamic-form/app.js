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

app.post('/ajax', (req, res) => {
    res.send(req.body);
});
