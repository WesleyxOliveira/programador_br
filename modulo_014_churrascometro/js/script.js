// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/ Agua - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

//Seleção de elementos
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let Resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let quantidadeTotalCerveja = cervejaPP(duracao) * adultos;
    let quantidadeTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    Resultado.innerHTML = `<p>${quantidadeTotalCarne/1000} Kg de carne</p>`;
    Resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja/355)} latas de cerveja</p>`;
    Resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas/2000)} Pet's de 2lt de bebibas</p>`;

    
}

function carnePP(duracao) {
    if(duracao >= 6) {
       return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
       return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao >= 6) {
       return 1500;
    } else {
        return 1000;
    }
}