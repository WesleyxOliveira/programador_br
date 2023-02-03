let tela = document.querySelector("#tela");
let ctx = tela.getContext("2d");

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0 * Math.PI,
    antiHorario: true
}

function drawCircle(c) {

    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue"
    ctx.lineWidth = "4";

    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHorario);

    ctx.fill();
    ctx.stroke();
}

setInterval(function() {

    if(circle.fim < 2 * Math.PI) {
        circle.fim += 0.03;
        circle.x += .6;
        circle.y += .6;

        drawCircle(circle);

    }

}, 40);