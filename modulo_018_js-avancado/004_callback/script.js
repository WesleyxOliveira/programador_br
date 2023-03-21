
function ola() {
    console.log("Olá");
}

function tchau() {
    console.log("Tchau");
}

function saudacao(s, nome) {
    s();
    console.log(nome)
}

saudacao(ola, "Wesley");