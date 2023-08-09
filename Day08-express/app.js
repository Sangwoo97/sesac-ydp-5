const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    // res.send('Hello Express !');

    res.render('index');
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
