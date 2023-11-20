const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.get('/', (req, res) => {
  res.render('chat');
});
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const users = {};

const updateList = () => {
  io.emit('updateNicks', users);
};

io.on('connection', (socket) => {
  socket.on('hello', (data) => {
    console.log(data);
    socket.emit('helloKr', { who: 'Hello', msg: '안녕!!!' });
  });

  socket.on('setNick', (nick) => {
    console.log(users);
    if (Object.values(users).includes(nick)) {
      io.emit('sameNick', `이미 존재하는 닉네임입니다.`);
    } else {
      users[socket.id] = nick;
      io.emit('notice', `${nick}님이 입장하셨습니다.`);
      io.emit('updateNicks', users);
      socket.emit('entrySuccess', nick);
      updateList();
    }
  });

  socket.on('send', (data) => {
    io.emit('newMessage', data);
  });

  socket.on('directSend', (data) => {
    io.to(socket.id).emit('newDirectMessage', data);
    io.to(data.id).emit('newDirectMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('접속 끊김 : ', socket.id);
    io.emit('notice', `${users[socket.id]}님이 퇴장하셨습니다.`);
    delete users[socket.id];
    updateList();
  });
});
