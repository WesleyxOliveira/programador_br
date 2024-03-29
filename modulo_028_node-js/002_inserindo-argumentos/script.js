/* 
Essa linha de código em JavaScript cria uma matriz chamada args que contém os argumentos passados para um script Node.js. Ela exclui os dois primeiros elementos da matriz process.argv, que são o caminho para o executável do Node.js e o caminho para o script em execução. Essa matriz args pode ser usada para manipular e acessar os argumentos da linha de comando no script.*/
let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = '';

if(args[0] == 's') {
    c = soma(a, b);
} else if (args[0] == 'm') {
    c = mult(a, b)
} else {
    c = 'Erro';
}

function soma(x, y) {
    return x + y;
}

function mult(x, y) {
    return x * y;
}

console.log(c);

