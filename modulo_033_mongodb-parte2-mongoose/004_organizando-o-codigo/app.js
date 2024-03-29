const PORT = 3000;
const e = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoutes');

mongoose.connect('mongodb://localhost/newLinks');

const db = mongoose.connection;

db.on('error', () => { console.log('houve um error') });
db.once('open', () => {console.log('Banco carregado')});

app.use('/', linkRoute);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});