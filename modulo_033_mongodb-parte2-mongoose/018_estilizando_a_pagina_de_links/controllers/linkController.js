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
        res.redirect('/');
    } catch (error) {
        if(error.message == 'Link validation failed: url: Path `url` is required.') {
            error.message = 'ERRO: Link é obrigatório';
        } else if(error.message == 'Link validation failed: title: Path `title` is required.') {
            error.message = 'ERRO: Título é obrigatório'
        }
        res.render('add', {error, body: req.body});
    }    
}

const allLinks = async (req, res)=> {
    let docs = await Link.find({});
    res.render('all', { links: docs });
}

const deleteLink = async (req, res)=> {
    let id = req.params.id;

    if(!id) {
        id = req.body.id;
    }

    try {
        await Link.findByIdAndDelete(id);
        res.redirect('/');
    } catch (error) {
        res.status(404).send(error);
    }
}

const loadLink = async (req, res)=> {
    let id = req.params.id;

    try {
        let doc = await Link.findById(id);

        res.render('edit', {error: false, body: doc})
    } catch (error) {
        res.send(error);
    }
}

const editLink = async (req, res)=> {
    let link = {};
    link.title = req.body.title;
    link.description = req.body.description;
    link.url = req.body.url;

    let id = req.params.id;
    try {
        let doc = await Link.updateOne({_id: id}, link);
        res.redirect('/');
    } catch (error) {
        res.render('edit', {error, body: req.body});
    }
}

module.exports = {redirect, addLink, allLinks, deleteLink, loadLink, editLink};