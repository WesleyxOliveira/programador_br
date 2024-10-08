const express = require('express');
const app = express();
const path = require('path');

const list = ['José', 'Marcos', 'Mariana'];

console.log(list);

setTimeout(()=> {
    list.push('Juliana');
    console.log(list);
}, 5000)

app.get('/list', (req, res)=> {
    res.send(list);
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000, ()=> {
    console.log('Server Running...');
})