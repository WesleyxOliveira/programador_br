
// let dobro = x => this.x; /* Dessa forma não funciona pois uma arrow function não entende o que é o this. */

let dobro = function() {
    console.log(2 * this.x);
}

let numero = {
    x: 8,
    d: dobro,
}

// console.log(numero.d());
dobro(numero);
