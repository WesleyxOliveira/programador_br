const jwt = require('jsonwebtoken');

const user = {
    id: "20",
    name: "joao",
    username: "joao@hotmail.com",
    password: '1234567'
}

const secret = 'alskdfuajlsk9898493fascliema';

function createToken() {
    const token = jwt.sign({id: user.id, email: user.username}, secret, {expiresIn: 60});

    
    console.log(token);
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwiZW1haWwiOiJqb2FvQGhvdG1haWwuY29tIiwiaWF0IjoxNzI1NDExMjU3LCJleHAiOjE3MjU0MTEzMTd9.UmmqFehWGi_OiynhMmBJ2IEDgOZo7GR8hr1pllhAMLo';

function testToken(token) {
    try {
        const validData =  jwt.verify(token, secret);
        console.log(validData);
    } catch (error) {
        console.log(error.message);
    }
}

testToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwiZW1haWwiOiJqb2FvQGhvdG1haWwuY29tIiwiaWF0IjoxNzI1NDExMjU3LCJleHAiOjE3MjU0MTEzMTd9.UmmqFehWGi_OiynhMmBJ2IEDgOZo7GR8hr1pllhAMLo');





