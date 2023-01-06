var calcMedia = function() {
    return (this.nota1 + this.nota2)/2;
}

// var aluno1 = turma[0];
// var aluno2 = turma[1];

// console.log(aluno1);
// console.log(aluno1.nome);
// console.log("Nota1: " + aluno1.nota1);
// console.log("Nota2: " + aluno1.nota2);
// console.log("Média: ", aluno1.media());

// console.log(aluno2);
// console.log(`Média: ${aluno2.media()}`);

// function criarAluno(n, n1, n2) {

//     return aluno = {
//         nome: n,
//         nota1: n1,
//         nota2: n2,

//         media: calcMedia,
//     }
// } 

function aluno(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = () => {
        return (this.nota1 + this.nota2) / 2;
    }
}

// var turma = [
//     criarAluno("Wesley", 9, 7.5),
//     criarAluno("Juliana", 10, 8.0),
//     criarAluno("Márcia", 5.0, 6.0),
//     criarAluno("Alberto", 10, 8, 8.5),
//     criarAluno("Jéssica", 4.0, 8.0, 8.5),

// ];

var a = new aluno("Jucicleide", 8.0, 9.0);



// for(i in turma) {
//     console.log(`Aluno: ${turma[i].nome}`);
//     console.log(`Nota1: ${turma[i].nota1}`);
//     console.log(`Nota2: ${turma[i].nota2}`);
//     console.log(`Media: ${turma[i].media()}`);
//     console.log("");
// }

// turma.forEach(function(e) {

//     console.log(`Aluno: ${e.nome}`);
//     console.log(`Nota1: ${e.nota1}`);
//     console.log(`Nota2: ${e.nota2}`);
//     console.log(`Média: ${e.media()}`);
//     console.log("");
// });

console.log(a.nome);
console.log(a.nota1);
console.log(a.nota2);
console.log(a.media());