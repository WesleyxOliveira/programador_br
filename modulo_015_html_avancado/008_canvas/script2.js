let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.moveTo(0, 0); // Move para o ponto 00
ctx.lineTo(250, 250);
ctx.lineWidth = 15;
ctx.lineTo(500, 0);
ctx.strokeStyle = "gray";
ctx.stroke();

