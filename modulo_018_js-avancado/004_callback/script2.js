let usuarios = ["Adriano", "Márcia", "José"];

function inserirUsuarios(nome, callback) {

    setTimeout(()=> {
        usuarios.push(nome);
        callback();
    }, 3000);

}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuarios("Wesley", listarUsuarios);
inserirUsuarios("Amanda", listarUsuarios);
inserirUsuarios("Alex", listarUsuarios);