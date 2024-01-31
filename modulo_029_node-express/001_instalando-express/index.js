// Importando o express
const express = require('express');

// app, recebo o objeto express
const app = express();

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})