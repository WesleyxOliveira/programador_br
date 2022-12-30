var idade = 19;

/*
Exemplo 1

if (idade < 18) {
    console.log("Não pode comprar bebibas");
    console.log("Volte futuramente");
}
else if (idade >= 18 && idade <= 35) {
    console.log("Pode compar bebibas");
    console.log("Mostre a sua identidade!");
}
else if (idade > 35 && idade <= 70) {
    console.log("Pode comprar bebibas");
    console.log("Qual o seu pedido?");
} else if(idade > 70) {
    console.log("Não pode comprar Bebidas");
} 

*/

if(idade < 18 || idade > 70) {
    console.log("Não pode comprar Bebidas");
} else {
    console.log("Pode comprar bebidas");
    console.log("Qual é o seu pedido?");
}