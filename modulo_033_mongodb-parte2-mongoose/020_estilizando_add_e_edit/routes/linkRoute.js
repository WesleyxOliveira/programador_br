const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');
var methodOverride = require('method-override');    

router.use(methodOverride('_method'))

router.get('/add', (req, res)=> {res.render('add',{error: false, body: {}})});
router.get('/', linkController.allLinks);
router.get('/:title', linkController.redirect);
router.get('/edit/:id', linkController.loadLink);

router.post('/', express.urlencoded({extended: true}), linkController.addLink);
router.post('/edit', express.urlencoded({extended: true},))
router.post('/edit/:id',express.urlencoded({extended: true}), linkController.editLink); 

router.delete('/:id', linkController.deleteLink);
router.delete('/', express.urlencoded({extended: true}), linkController.deleteLink);

module.exports = router;