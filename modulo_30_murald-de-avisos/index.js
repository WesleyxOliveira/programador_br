const PORT = 3000;
const express = require('express');
const app = express();
app.use(express.json());

let posts = [
    {
        id: 'klasfakls',
        title: 'Teste do mural',
        description: 'Descrição de teste'
    },
    {
        id: 'klasfakls',
        title: 'Teste do mural',
        description: 'Descrição de teste'
    },
    {
        id: 'klasfakls',
        title: 'Teste do mural',
        description: 'Descrição de teste'
    }
];

app.get('/all', (req, res) => {
    res.json(JSON.stringify(posts));
});


app.post('/new', (req, res) => {
    let id = generateId();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({id, title, description});
    res.send('Post adicionado!');
});

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
});

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}