const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let user = {
    name: 'Wesley De Souza', 
    phone: '(00)999-9999'
}

// Especifique o diretório contendo os templates EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('user', user);
});

app.listen(3000, () => {
    console.log('Server running...');
})