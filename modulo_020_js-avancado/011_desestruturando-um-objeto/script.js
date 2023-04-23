let aluno = {
    matricula: 1234,
    nome: "Marcos", 
    telefone: 98765432,
    cidade: "Aparecida de Goiânia",
    idade: 18,
}

let aluno1 = {
    matricula: 4567,
    nome: "Wesley",
    telefone: 12345678,
    cidade: "Auckland",
    idade: 32
}

let aluno2 = {
    matricula: 3858,
    nome: "José",
    telefone: 123234,
    cidade: "Christchurc",
    idade: 32
}

var alunos = [aluno, aluno1, aluno2];


var [Marcos, ...outros] = alunos;