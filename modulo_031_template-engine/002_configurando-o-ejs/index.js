const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Especifique o diretório contendo os templates EJS
app.set('views', path.join(__dirname, 'views'));

// Defina o EJS como a engine de visualização
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('user');
});

app.listen(3000, () => {
    console.log('Server running...');
})