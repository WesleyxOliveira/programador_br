module.exports = {
    area_quadrado: (largura, altura) => {return largura * altura},
    area_retangulo: (largura, altura) => {return largura * altura},
    area_triangulo: (largura, altura) => {return (largura * altura) / 2},
    area_circulo: (raio) => {return 3.14 * Math.pow(raio, 2)}
}