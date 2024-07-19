var Link = require('../models/Link');

const redirect = async (req, res)=> {
    let title = req.params.title;

    try {
        let doc = await Link.findOne({ title: title });
        console.log(doc);

        res.redirect(doc.url);
    } catch (error) {
        res.send(error);
    }
}

const addLink = async (req, res)=> {
    const link = new Link(req.body);
    try {
        let doc = link.save();
        res.send('Link adicionado com sucesso!');
    } catch (error) {
        res.send(error);
    }
    
}

module.exports = {redirect, addLink};