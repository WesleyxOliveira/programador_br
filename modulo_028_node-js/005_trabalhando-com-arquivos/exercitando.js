// Pegando módulo (fs) do firebase.
let fs = require('fs');

// Pegando argumentos que serão passados pelos node
let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, 'UTF8', function(err, data) {
    if(err){throw err};

    fs.writeFile(fileName + '_UpperCase', data.toUpperCase(), function(err) {
        if (err){throw err};

        console.log('Documento criado com sucesso!');
    })
})

