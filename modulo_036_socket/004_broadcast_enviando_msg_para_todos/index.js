const express = require('express');
const app = express();
const path = require('path');
const socketIO = require('socket.io');

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, ()=> {
    console.log('Server Running...');
});

const io = socketIO(server);

io.on('connection', (socket)=> {
    console.log('New connection.');

    socket.broadcast.emit('hello', {msg: `Chegou um novo usuário.`});
})
