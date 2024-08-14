var Link = require('../models/Link');

const redirect = async (req, res, next)=> {
    let title = req.params.title;

    try {
        let doc = await Link.findOne({title});
        console.log(doc);

        if(doc) {
            res.redirect(doc.url);
        } else {
            next();
        }
    } catch (error) {
        res.send(error);
    }
}

const addLink = async (req, res)=> {
    const link = new Link(req.body);
    try {
        let doc = await link.save();
        res.send('Link adicionado com sucesso!');
    } catch (error) {
        if(error.message == 'Link validation failed: url: Path `url` is required.') {
            error.message = 'ERRO: Link é obrigatório';
        } else if(error.message == 'Link validation failed: title: Path `title` is required.') {
            error.message = 'ERRO: Título é obrigatório'
        }
        res.render('index', {error, body: req.body});
    }    
}

const allLinks = async (req, res)=> {
    let links = await Link.find({});
    res.render('all', { links });
}

module.exports = {redirect, addLink, allLinks};