const express = require('express');
const router = express.Router();

router.post('/register', (req, res)=> {
    console.log('Register');
    res.send('Register');
});

router.post('/login', (req, res)=> {
    console.log('login');
    res.send('Login');
});

module.exports = router;