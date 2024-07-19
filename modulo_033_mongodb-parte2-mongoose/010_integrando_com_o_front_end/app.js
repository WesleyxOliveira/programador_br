const express = require('express');
const app = express();
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
const path = require('path');

mongoose.connect('mongodb://localhost/links');
let db = mongoose.connection;

db.on('error', () => { console.log('Houve um error') });
db.once('open', () => {console.log('Banco de dados carregado!');});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRoute);

app.listen(3000, () => {
    console.log('Server Running on Port 3000.');
});