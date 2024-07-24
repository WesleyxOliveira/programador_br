const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.get('/', (req, res)=> {res.render('index',{error: false, body: {}, links})});

router.get('/all', linkController.allLinks);

router.get('/:title', linkController.redirect);

router.post('/', express.urlencoded({extended: true}), linkController.addLink);

module.exports = router;