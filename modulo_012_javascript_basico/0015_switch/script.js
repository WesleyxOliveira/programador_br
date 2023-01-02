var nota1 = 8.0;
var nota2 = 6.8;

var media = (nota1 + nota2) /2;

if(media < 5) {
    console.log("Aluno reprovado!");
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Média: " + media)
} else if(media >= 5 && media < 6) {
    console.log("Aluno de recuperação");
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Média: " + media)
} else {
    console.log("Aluno aprovado. Parabéns!");
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Média: " + media)
}

console.log("");

var conceito = "";

if(media >= 8) {
    conceito = "Ótimo"
}else if(media >= 6.5) {
    conceito = "Bom";
} else {
    conceito = "Regular";
}

conceito = "Mais ou menos";


switch(conceito) {
    case  "Ótimo":
        console.log("Parabéns, você é um ótimo aluno");
        break
    case "Bom":
        console.log("Você está quase perfeito");
        break
    case  "Regular":    
        console.log("Estude mais um pouco");
        break
    default:   
        console.log("Houve algum erro!");
        break // Não precisa mas é uma boa prática
}