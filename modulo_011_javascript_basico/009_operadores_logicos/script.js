/*
    && e
    || ou
    Negativo !
*/

/*
Exemplo: 1

var a = true;
var b = false;

var c = a && b;

console.log(c); 

*/


/*
Exemplo: 2

var idade = 31;

var maior20 = idade > 20;
var menor30 = idade < 30;
var entre20E30 = idade > 20 && idade < 30;

console.log("Idade", idade, "anos");
console.log("Maior que 20: " + maior20);
console.log(`Idade menor que 30: ${menor30}`);
console.log("Entre 20 e 30: ", entre20E30);

*/

/*
var idade = 20;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidade = menor10 || maior65;

console.log("Idade", idade, "anos");
console.log(`Idade menor que 10: ${menor10}`);
console.log("Maior que 65: " + maior65);
console.log("Tem direito a gratuidade: ", gratuidade);

*/

var idade = 15;

var maior20 = idade >= 20;
var menor20 = !maior20;

console.log("Maior que vinte " + maior20);
console.log("Menor que vinte " + menor20);

console.log(!true);


