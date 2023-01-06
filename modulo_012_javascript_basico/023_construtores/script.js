// Maneiras de criar(instanciar) um objeto

/*
// Maneira 1 

var a = {nome: "Wesley", idade: 31,};

a["casado"] = false;
a.bonito = true;


console.log(a);
console.log(a.nome);
console.log(a.idade);
console.log(a.casado);
console.log(a.bonito);

*/



// Maneira 2

function obj(nome, snome, idade) {
    return {
        nome: nome, sobrenome: snome, idade: idade
    };
}

var a = obj("Wesley", "Oliveira", 31);
var b = obj("Marcela", "Silva", 15);


console.log(a);
console.log(b);


// Maneira 3

function obj2(nome, snome, idade) {
    this.nome = nome;
    this.sobreNome = snome;
    this.idade = idade;
}

var c = new obj2("José", "Arlindo", 50);
var d = new obj2("Amália", "Cruz", 40);

console.log(c["idade"]);
//ou
console.log(c.nome);
console.log(d);