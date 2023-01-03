function calcMedia(n1, n2) {
    return (this.notas[0] + this.notas[1])/2;
}

var aluno = {
            nome: "Wesley", 
            notas: [8.0, 9.5],

            media: calcMedia
}

var aluno2 = {
    nome: "João", 
    notas: [1.0, 8.0],

    media: calcMedia
};

console.log(aluno["nome"]);
console.log("Média: ", aluno.media());

console.log("");

console.log(aluno2.nome);
console.log("Média: ", aluno2.media());