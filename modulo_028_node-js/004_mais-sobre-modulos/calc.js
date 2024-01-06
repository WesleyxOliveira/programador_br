// module.exports é um objeto, se eu mandar escrever o module.exports, vai ser retornado isso: {};

// Se eu mandar escrever isso no console, vai ser retornado um objeto com a função(método): { soma: [Function: soma] }
module.exports.soma = function soma(x, y)  {return x + y};

// Se eu mandar escrever isso no console, vai ser retornado um objeto com a função(método): { soma: [Function: soma], mult: [Function: mult] }
module.exports.mult = function mult(x, y) {
    return x * y
};
