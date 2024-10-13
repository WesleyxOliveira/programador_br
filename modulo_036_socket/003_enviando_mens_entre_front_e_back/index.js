const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, ()=> {
    console.log('Server Running...');
});

const io = socketIO(server);

io.on('connection', (socket)=> {
    console.log('New connection.');

    socket.emit('hello', {msg: 'Seja muito bem vindo'});

    socket.on('hello_client_response', (data)=> {
        console.log(data.msg);
    })
})
