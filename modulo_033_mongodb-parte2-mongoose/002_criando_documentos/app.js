const PORT = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

/*
    schema:
    Este código cria um novo esquema Mongoose chamado linkSchema. O esquema define a estrutura de um documento que será armazenado no MongoDB.
*/
const linkSchema =  new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    url: String,
    click: {type: Number, default: 7}
})

/* 
    Modelo: 
    Um modelo é uma classe que representa uma coleção MongoDB no código JavaScript.
    Ele fornece uma interface para interagir com a coleção.

    Esta função cria um modelo Mongoose a partir de um nome de modelo e um esquema.
*/
const Link = mongoose.model('Link', linkSchema);

let link = new Link({
    title: 'progbr',
    description: 'Link para o instagram',
    url: 'https://www.instagram.com/wesley.xoliveira/',
})

link.save().then(doc => {
    console.log(doc);
}).catch(error => {
    console.log(error);
})

mongoose.connect('mongodb://localhost/newLinks');

const db = mongoose.connection;

db.on('error', () => { console.log('houve um error')});

//. O ouvinte de evento é chamado quando o banco de dados é aberto com sucesso.
db.once('open', () => {console.log('Banco carregado...')});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});