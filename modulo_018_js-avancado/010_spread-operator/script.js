/* Spread operator em objetos */
let pessoa = {
    nome: "José Silva", 
    idade: 32
};

let contato = {
    telefone: 87654321,
    email: "jose@gmail.com"
}

var copia = {...pessoa, cidade: "Rio de Janeiro", ...contato}
copia.idade = 88;

/* Spread operator em arrays */

var nota_turma1 = [10, 9, 8, 7];
var nota_turma2 = [4, 3, 6, 7];

var todasAsNotas = [...nota_turma1, ...nota_turma2];

console.log(todasAsNotas)