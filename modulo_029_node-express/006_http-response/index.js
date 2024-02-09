const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({name: "xzera"});
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${   PORT}`);
})