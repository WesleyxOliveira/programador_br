const express = require('express');
const router = express.Router();


const alunos = [
    {id: 0, nome: 'João'},
    {id: 0, nome: 'Mariana'},
    {id: 0, nome: 'Wesley'},
    {id: 0, nome: 'Juliana'}
];

//body
router.get('/', (req, res, next) => {
    let aluno = alunos[req.body.id];

    if(aluno) {
        res.json(aluno);
    } else {
        next();
    }
});

//query
router.get('/', (req, res, next) => {
    let aluno = alunos[req.query.id];

    if(aluno) {
        res.json(aluno);
    } else {
        res.send('Aluno não encontrado!');
    }
});

router.get('/all', (req, res, next) => {
    res.json(JSON.stringify(alunos));
});

router.get('/:id', (req, res) => {
    let aluno = alunos[req.params.id];
    res.send(aluno);
});

module.exports = router;
