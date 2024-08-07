const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.get('/', (req, res)=> {res.render('index',{error: false, body: {}})});

router.get('/all', linkController.allLinks);

router.get('/:title', linkController.redirect);

router.post('/', express.urlencoded({extended: true}), linkController.addLink);

router.delete('/:id', linkController.deleteLink);
router.delete('/', express.urlencoded({extended: true}), linkController.deleteLink);

module.exports = router;