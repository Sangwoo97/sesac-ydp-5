const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    // res.write('<h1>Hello, Node.js!</h1>');
    // res.end('<p>My first node server!ㅁㅇㅁㅇㅁ</p>');

    try {
        const data = fs.readFileSync('./index2.html');
        res.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
        res.write(data);
        res.end();
    } catch (error) {
        console.error(error);
        const data = fs.readFileSync('./404.html');
        res.writeHead(404, { 'content-type': 'text/html; charset=utf8' });
        res.write(data);
        res.end();
    }
});
const PORT = 8000;

server.on('connection', (req, res) => {
    console.log(`connection이벤트 발생`);
});

server.listen(PORT, () => {
    console.log(`server listening on ${PORT} port`);
});

// setTimeout(() => {
//     console.log('10초가 지나 서버가 종료되었습니다');
//     server.close();
// }, 10000);
