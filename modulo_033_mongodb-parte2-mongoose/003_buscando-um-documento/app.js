const PORT = 3000;
const e = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: String,
    click: { type: Number, default: 7 }
})

const Link = mongoose.model('Link', linkSchema);

mongoose.connect('mongodb://localhost/newLinks');

const db = mongoose.connection;

db.on('error', () => { console.log('houve um error') });

db.once('open', () => {
    console.log('Banco carregado...');

    app.get('/:title', async (req, res) => {
        // Pega o valor passado por parâmetro na url
        let title = req.params.title;

        //essa linha de código busca um único documento na coleção Link do MongoDB com base no valor da variável title e armazena o resultado na variável doc
        try {
            let doc = await Link.findOne({title});

            /*
            O método redirect() do Express é usado para redirecionar o usuário para uma nova rota. Isso pode ser útil para várias situações, como:

            Redirecionar o usuário para uma página de login após o registro.
            Redirecionar o usuário para uma página de erro após uma falha na autenticação.
            Redirecionar o usuário para uma nova página após a conclusão de uma ação.
            */
            res.redirect(doc.url);
        } catch (error) {
            res.send(error);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});