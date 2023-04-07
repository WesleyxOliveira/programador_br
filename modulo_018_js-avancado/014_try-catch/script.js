let nome = "";

try{
    if(nome == "") {
        throw "O nome não pode ser vazio";
    }
} catch(error) {

    console.log("Houve um erro: " + error)
}finally {
    console.log("Boa noite");
}

