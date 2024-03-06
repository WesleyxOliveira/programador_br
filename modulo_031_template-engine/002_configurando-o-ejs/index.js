const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

//Fala em qual pasta está os templates
/*
    * A primeira chave é a chave que precisamos setar para que o EJS consiga identificar onde vão estar as views.

    * o segundo é o nome da pasta.
*/
app.set('views', path.join(__dirname, 'views'));

/* Esse código serve para falar para o node,qual o template engine está sendo utilizado no caso o EJS*/
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('user');
});

app.listen(3000, () => {
    console.log('Server running...');
})