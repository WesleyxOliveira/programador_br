let tela = document.querySelector("#tela");
let ctx = tela.getContext("2d");

let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = 1 * Math.PI;

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "green"
ctx.lineWidth = "4";

ctx.arc(x, y, raio, inicio, fim);

ctx.fill();
ctx.stroke();