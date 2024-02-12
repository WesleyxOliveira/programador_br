const express = require('express');
const app = express();

const alunos = 
    [{id: 0, nome: 'José'}, 
    {id: 1, nome: 'Maria'}, 
    {id: 2, nome: 'João'},
    {id: 3, nome: 'Marcos'}];

app.use(express.urlencoded({ extended: true }));


//Retorna Hello World
app.get('/', (req, res) => {
    res.send('Hello World');
})

//Retorna o array de alunos transformado em strings.
app.get('/alunos', (req, res) => {
    res.json(JSON.stringify(alunos));
})

/* Maneira 1 */
//Essa é uma das maneiras pe pegar o aluno no backend, tenho que passar no body da requisição o id do aluno.

// app.get('/aluno', (req, res) => {
//     console.log(req.body);
//     let aluno = alunos[req.body.id];

//     res.json(aluno);
// })

/* Maneira 2 */
//Fazendo a mesma coisa,mas agora por parâmetro, nessa caso tenho que colocar o parâmetro na url da requisição, Ex: http://localhost:5000/aluno/2.

// app.get('/aluno/:id', (req, res) => {
//     console.log(req.params.id);
//     res.json(alunos[req.params.id]);
// })

/* Maneira 3 */
/* Essa maneira é com query, você tem que passar o valor pela url assim: 192.168.1.66:5000/aluno?id=2  e ai acessar o array com o valor passado, exemplo: alunos[2]*/
app.get('/aluno', (req, res) => {
    // console.log(req.body);
    console.log(req.query)
    let aluno = alunos[req.body.id];

    res.json(aluno);
})


app.listen(5000, () => {console.log('Servidor rodando...')});