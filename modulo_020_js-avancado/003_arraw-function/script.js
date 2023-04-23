// Primeira maneira
function dobro(x) {
    console.log(2 * x);
}

dobro(4);

// Segunda maneira

let triplo = function(x) {
    console.log(3 * x);
}

triplo(10);

/* Arrow Function com Parenteses*/

let quadruplo = (x) => {
    console.log(4 * x);
}

quadruplo(10);

/* Arrow function sem parenteses */

let quintuplo = x => console.log(5 * 10);

quintuplo(10);

/* (bind) e (this) naõ funcionam em arrow functions */

let numero = {
    x: 10,
    b: sextuplo,
}

let sextuplo = x => (6 * this.x);

// function sextuplo() {
//     return (6 * this.x);
// }

console.log(numero.b());
