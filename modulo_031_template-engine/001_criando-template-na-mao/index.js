const express = require('express');
const fs = require('fs');
const app = express();

const user = {
    id: 0,
    name: 'Wesley De Souza',
    phone: '(62)234-4321'
}

function render(data, obj) {
    for(let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key])
    }
    return data;
}

app.get('/', (req, res) => {
    fs.readFile('./templates/user.progbr', 'utf-8', (err, data) => {
        if(!err) {
            res.send(render(data, user));
        }
    })
});

app.listen(3000, () => {
    console.log('Server running...');
})