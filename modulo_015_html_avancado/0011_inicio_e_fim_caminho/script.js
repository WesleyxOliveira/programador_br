let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle =  "red";
ctx.moveTo(10, 10);
ctx.lineTo(400, 300);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(250, 0);
ctx.lineTo(250, 500);
ctx.lineWidth = "4";
ctx.strokeStyle = "red";

ctx.stroke();