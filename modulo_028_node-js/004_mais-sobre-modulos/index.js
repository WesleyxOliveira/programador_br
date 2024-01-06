let calc = require('./calc.js');

// Essa linha, atribui a propriedade soma, do obejeto que foi exportado do calc.js, à variável soma.
// let soma = calc.soma(2, 3);
// também pode ser feito dessa forma.
let soma = require('./calc.js').soma; 

// Essa linha, atribui a propriedade mult, do obejeto que foi exportado do calc.js, à variável soma.
let mult = calc.mult(10, 3);


console.log(soma(2, 2));
