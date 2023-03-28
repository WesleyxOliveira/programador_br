
function novoAluno(nome, idade) {
    return {nome, idade};   
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45), 
    novoAluno("Márcia", 29),
    novoAluno("João", 35)
];

let jogadores = [
    nomeAluno("Wesley", 32),
    nomeAluno("Leo", 32),
    nomeAluno("Micheli", 32),
    nomeAluno("Maria", 32),
]

function temMenosDe30(aluno) {
    return aluno.idade < 30;
}

function temMaisDe30(aluno) {
    return aluno.idade > 30;
}

// let alunosComMenosDe30 = alunos.filter(temMenosDe30);

// let alunosComMaisDe30 = alunos.filter(temMaisDe30);

// console.log(alunosComMenosDe30);
// console.log(alunosComMaisDe30);

function filtro(callback) {
    let alunosFiltrados = [];

    for(let aluno of this) {
        if(callback(aluno)) {
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados;
}

alunos.filtro = filtro;
jogadores.filtro = filtro;
console.log(alunos.filtro(temMenosDe30));