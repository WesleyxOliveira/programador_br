let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 15;
}

function avancar() {
    video.currentTime += 15;
}

function diminuir_vel() {
    video.playbackRate -= 0.1;
}

function aumentar_vel() {
    video.playbackRate += 0.1;
}

function play() {

    video.play();

}

function pause() {
    video.pause();
}

function parar() {

    video.pause();
    video.currentTime = 0;
    video.poster = "./assets/imagens/poster.jpg";
}