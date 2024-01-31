// Importando o express
const express = require('express');
//Importe o módulo path, que ajuda a montar os caminhos dos nossos arquivos
const path = require('path');

// app, recebo o objeto express
const app = express();

app.use(express.static(path.join(__dirname, 'client')))

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})