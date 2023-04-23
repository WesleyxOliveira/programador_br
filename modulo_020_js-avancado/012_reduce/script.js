function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Maria", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35),
];

function idadeDaTurma(total, alunos) {
    return total + alunos.idade;
}

console.log(alunos.reduce(idadeDaTurma, 0))