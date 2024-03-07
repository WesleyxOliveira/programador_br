const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

const users = [
    {
        id: 'asdkfja', 
        name: 'Wesley', 
        phone: '(00)000-0000',
    },
    {
        id: 'lkjasd', 
        name: 'Mariana', 
        phone: '(11)111-11111',
    }, 
    {
        id: 'lçlkaçj', 
        name: 'Juliana', 
        phone: '(22)222-2222',
    }
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('user', {users:users});
});

app.listen(3000, () => {
    console.log('Server running...');
})