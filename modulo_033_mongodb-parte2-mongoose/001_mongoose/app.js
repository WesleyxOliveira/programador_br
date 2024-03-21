const PORT = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

/*
Conectando o mongoose ao MongoDb e ao bando de dados (blog) através do then
mongoose.connect('mongodb://localhost/blog')
    .then(db => {
        console.log(db);
    }).catch(error => {
        console.log(error);
    })

*/




//Esta é uma outra forma de fazer, e usa uma função assíncrona 
mongoose.connect('mongodb://localhost/blog');

const db = mongoose.connection;

//É adicionado um listener ao evento db.on("error") para que quando houver um erro esse código execute, é usado listener, pois o mongoose.connection é assyncrono.
db.on('error', () => { console.log('houve um error')});


    
//db.once('open') é para executar apenas uma vez quando o banco de dados for carregado.
db.once('open', () => {console.log('Banco carregado...')});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});