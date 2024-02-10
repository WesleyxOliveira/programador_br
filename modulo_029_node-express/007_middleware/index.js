const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Middleware é essa função que é chamada na requisição ex: (req, res) => {};

/*
    * O next() vazio, sem nenhum parâmetro, faz com que execute o próximo middleware e não trave o código, nesse caso o próximo middleware é o hello.

    * Qualquer erro que tenha dado, eu posso passar para o next('exemplo de erro'), sendo assim, ele não passa para o próximo middleware e retorna para a requisição o erro encontrado.

const consoleMethod = (req, res, next) => {
    console.log(req.method);
    // next();
    next('Erro de qualquer coisa!');
}
*/

const consoleBody = (req, res, next) => {
    console.log(req.body);
    next();
}

const hello = (req, res) => {
    res.send('Hello World!');
}

/*
* Essa é uma das formas de utilizar o middleware

app.get('/',consoleMethod, hello);
app.post('/',consoleMethod, hello);

*/

/*
* Essa é uma outra forma, mas dessa forma, mas o consoleMethod, não será chamado quando a requisição for do tipo post, pois só está sendo passado para o get.

app.get('/', consoleMethod);
app.get('/', hello);

app.get('/', hello);

*/

/* Desta outra forma, o método use faz com que o consoleMethod, responda a qualquer tipo de método, no caso abaixo, vai responder tando ao get quanto ao put
app.use('/', consoleMethod);
app.get('/', hello);
app.put('/', hello);

 */
app.use('/', bodyParser.json());
app.use('/', consoleBody);
app.get('/', hello);
app.post('/', hello);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server rodando...');
})