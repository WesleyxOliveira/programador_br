// function saudacao() {

//     return "Olá Mundo!";
// }

// var s = saudacao;

// console.log(s());

/*
// Armazenando uma func em uma variável

function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2)/2;
    return media;
}

var m = media;

var resultado1 = m(2, 3);

console.log(resultado1);

*/


// Função anonima
var media = function(n1, n2) {
    return (n1 + n2)/2;
}

console.log("Média: ", media(10, 5));

// Array function
var media1 = (n3, n4) => {
    return (n3 + n4)/2
}

console.log(`Média: ${media1(5, 6)}`);