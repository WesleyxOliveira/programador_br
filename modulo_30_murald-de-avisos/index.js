const PORT = 3000;
const express = require('express');
const app = express();
app.use(express.json());
const posts = require('./model/model');

app.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});


app.post('/new', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);
    res.send('Post adicionado com sucesso!');
});

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
});

