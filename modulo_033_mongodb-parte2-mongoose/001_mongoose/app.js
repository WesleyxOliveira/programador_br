const PORT = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Conectando o mongoose ao MongoDb e ao bando de dados (links)
mongoose.connect('mongodb://localhost/links')

let db = mongoose.connection;

console.log(db);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});