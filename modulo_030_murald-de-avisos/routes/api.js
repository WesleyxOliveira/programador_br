const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const cors = require('cors');

//Passando ao cors os dominios que podem acessar ao meu projeto alem do endereço ip da minha maquina
const options = {
    origin: 'http://localhost:3000'
}

/* 
O módulo cors no Express é usado para lidar com política de mesmo domínio (Same-Origin Policy) no navegador, permitindo ou restringindo solicitações HTTP entre diferentes domínios. Ele facilita o controle de acesso a recursos em uma aplicação web, definindo cabeçalhos HTTP apropriados para permitir ou bloquear solicitações de origens diferentes. Em resumo, o cors ajuda a resolver problemas de segurança relacionados à política de mesma origem ao permitir solicitações de origens específicas.
*/
router.use(cors(options));

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});


router.post('/new', bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);
    res.send('Post adicionado com sucesso!');
});

module.exports = router; 