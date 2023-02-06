let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

/*
let img = document.getElementById("red");

ctx.drawImage(img, 20, 20);
*/

//Outra forma de adicionar img com canvas sem colocar a imagem no html primeiro
let img = new Image();
img.src = "./images/red.webp";

img.onload = desenharImg;

function desenharImg() {
    ctx.drawImage(this, 125, 125);
}