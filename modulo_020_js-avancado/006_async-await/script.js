let usuarios = ["Adriano", "Márcia", "José"];

function inserirUsuario(nome) {

    let promise = new Promise(function(resolve, reject) {

        setTimeout(() => {
            usuarios.push(nome);

            let error = false;

            if(!error) {
                resolve()
            }else {
                reject({msg: "Mensagem de erro de qualquer coisa"});
            }
        }, 2000);
    });

    return promise;
}

function listarUsuarios() {
    console.log(usuarios);
}

async function executar() {
    await inserirUsuario("Wesley");
    listarUsuarios();
}

executar();