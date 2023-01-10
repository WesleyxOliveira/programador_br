// var numero1 = 4;
// let numero2 = 5;
// const numero3 = 6;

// numero1 = 40; // funciona
// numero2 = 50; // funciona
// numero3 = 60; // não da certo pois é uma const

//Posso mudar o valor de um const, o que não posso é reatribuir Ex:

const numero4 = [5];

numero4.push(8); // E: Modifiquei o conteúdo do array, mas o array ainda é o msm.(funciona)

console.log(numero4);

// Isso funciona tanto para arrays quanto para objetos Ex:

const numero5 = {};

numero5.nome = "Wesley";

console.log(numero5);

{
    var numero6 = 50; // Escopo global
    let numero7 = 60; // Só funciona dentro do bloco
    const numero8 = 70; // Só funciona dentro do bloco
}

console.log(numero6);
console.log(numero7);
console.log(numero8);