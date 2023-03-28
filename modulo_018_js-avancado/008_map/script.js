function novoAluno(nome, idade) {
    return {nome, idade};
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Maria", 29),
    novoAluno("João", 35),
];

function alunoDaquiA5Anos(aluno) {
    return {
        nome: aluno.nome,
        idade: aluno.idade + 5,
    }
}

console.log(alunos.map(alunoDaquiA5Anos))