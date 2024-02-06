// Importando o express
const express = require('express');
const { type } = require('os');
//Importe o módulo path, que ajuda a montar os caminhos dos nossos arquivos
const path = require('path');

// app, recebo o objeto express
const app = express();

app.use('/meusite', express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
    /* 
    res.type() mais comuns

    res.type('.html') => 'text/html'

    res.type('html') => 'text/html'

    res.type('txt') => 'text/plain'

    res.type('json') => 'application/json'

    res.type('application/json') => 'application/json'

    res.type('png') => 'image/png'
    */
    res.type('html');
    res.send("<h1>Hello World rom GET</h1>");
});

app.post('/', (req, res) => {
    res.send('<h1>Hello World from Post!</h1>');
});

app.put('/', (req, res) => {
    res.send('<h1>Hello World from PUT!</h1>');
})

app.delete('/', (req, res) => {
    res.send('<h1>Hello World from Delete!</h1>');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})