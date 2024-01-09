// Importando o arquivo (file sistem) do proprio node.js
let fs = require('fs');

/*
    writeFile(): Esse método tem três argumentos, o primeiro é o nome do arquivo que será criado, o segundo é o conteúdo que será escrito dentro deste arquivo e o terceiro é um callback, para a gente saber se deu certo ou não. 

    fs.writeFile('exemplo.txt', 'Hello world', function (error) {
    if(error) {throw error};

    console.log('Arquivo criado com sucesso!');
})
*/


/*
    appendFile():  é usado para acrescentar dados a um arquivo. Ele cria o arquivo se não existir e adiciona os dados especificados ao final do arquivo. Se o arquivo já existir, os dados são simplesmente anexados: Ex:

    fs.appendFile('exemplo.txt', ' - Olá mundo!', (err)=> {
    if(err) {throw err};

    console.log('Arquivo atualizado com sucesso!');
})
*/


/*
    unlink(): em Node.js é usado para excluir (remover) um arquivo.

    fs.unlink('exemplo.txt', (err) => {
    if(err) {throw err};

    console.log('Arquivo removido com sucesso!');
})
*/

/*
    rename(): em Node.js é utilizado para renomear um arquivo ou mover um arquivo de um local para outro.

    fs.rename('teste2.txt', 'teste3.txt', (err) => {
    if(err){throw err};

    console.log('Arquivo renomeado com sucesso');
})
*/

/* readFile(): em Node.js é utilizado para ler o conteúdo de um arquivo.
*/

fs.readFile('./teste3.txt','UTF8', function(error, data) {
    if(error){throw error};

    console.log(data);
})

