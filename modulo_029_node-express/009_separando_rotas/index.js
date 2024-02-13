const express = require('express');
const app = express();
const aluno = require('./routes/aluno.js');

app.use(express.urlencoded({extended: true}));

app.use('/api/students', aluno);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => {
    console.log('Server rodando...');
});