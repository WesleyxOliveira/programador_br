const http = require('http');
const url = require('url');
const fs = require('fs');
const { channel } = require('diagnostics_channel');

function handleFile(req, res, callback) {
    let path = new URL(req.url, 'http://localhost').pathname;

    let fileName = '.' + path;

    fs.readFile(fileName, (error, data) => {
        if (error) {

            if (callback) {
                if (!callback(req, res)) {
                    res.writeHead(404, { 'Content-type': 'text/plain' });
                    res.end('<h1>Página não encontrada!</h1>');
                }
            }


        } else {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);
            res.end();
        }
    })
}

function handleRequest(req, res) {
    let path = new URL(req.url, 'http://localhost').pathname;

    if (path == '/teste') {
        res.end('Teste');
        return true;
    }

    return false;
}


http.createServer((request, response) => {

    handleFile(request, response, handleRequest);


}).listen(3000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Servidor rodando na porta 3000');
    }
})