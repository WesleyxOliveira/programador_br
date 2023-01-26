let image = document.getElementById("like");


// Mudando a imagem de fundo

// image.addEventListener("click", () => {

//     let lastImage = image.getAttribute("src");
//     image.setAttribute("src", "./imagens/thumbs-down.png");

//     console.log(lastImage);

// });


// Criando um novo atributo no elemento;

image.addEventListener("click", function() {

    image.setAttribute("cor", "vermelho");

    console.log(image);

})

