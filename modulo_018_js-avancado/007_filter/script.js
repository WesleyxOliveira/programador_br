
function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35),   
];

// for(let aluno of alunos) {
//     if(aluno.idade < 30) {
//         console.log(aluno.nome);
//     }
// }

function temMenosDe30(aluno) {
    return aluno.idade < 30;
}

function temMaisDe30(aluno) {
    return aluno.idade > 30;
}

let alunosComMenosDe30 = alunos.filter(temMenosDe30);

let alunosComMaisDe30 = alunos.filter(temMaisDe30);

console.log(alunosComMenosDe30);
console.log("");
console.log(alunosComMaisDe30);