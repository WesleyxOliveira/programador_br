let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.rect(10, 10, 100, 200);

ctx.fillStyle = "blue";
// ctx.fillRect(10, 10, 100, 200);

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
// ctx.strokeRect(10, 10, 100, 200);
ctx.fill();
ctx.stroke();

ctx.clearRect(20, 20, 30, 30);