// Nome do aluno - nota 1 - nota - 2 - média - aprovado ou reprovado

var nomes = ["Wesley", "José", "Maria"];
var notasA = [7.0, 1.0, 9.5];
var notasB = [4.0, 5.0, 8.5];

var media = (n1, n2) => {
    return (n1 + n2) / 2;
}

var teste = function (media) {
    if (media < 5) {
        return "Reprovado!";
    } else if (media >= 5 && media < 6) {
        return "Recuperação!";
    } else {
        return "Aprovado!";
    }
}

for (index in nomes) {
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    console.log(nomes[index] +
        " - " +
        nota1 +
        " - " +
        nota2 +
        " - " +
        m +
        " - " +
        teste(m));
}


// teste(media(notasA[index], notasB[index])));