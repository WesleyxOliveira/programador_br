// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/ Agua - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

//Seleção de elementos
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");



function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let tempo = inputDuracao.value;
    let quantidadeTotalCarne;


    quantidadeTotalCarne = carPP(duracao) * adultos + (carPP(duracao)/2 * criancas);

    console.log(quantidadeTotalCarne);
}

function carPP(duracao) {
    if(duracao <= 6) {
        return 400;
    } else {
        return 650;
    }
}
