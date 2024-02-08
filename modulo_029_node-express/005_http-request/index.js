// Importando o express
const express = require('express');
const { type } = require('os');
const path = require('path');

// app, recebo o objeto express
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello world!');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

