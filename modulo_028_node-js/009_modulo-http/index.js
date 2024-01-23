// Importando o módulo HTTP
const http = require('http');

// Configurando o servidor
http.createServer((request, response) => {
    //Configurando o cabeçalho da resposta
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end('<h1>Hello World!</h1>');
}).listen(3000, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Servidor rodando na porta 3000');
    }
})


/*    
    O cabeçalho "Content-Type" é utilizado para indicar o tipo de mídia do recurso enviado na resposta HTTP. Aqui estão alguns tipos comuns de "Content-Type":

    text/plain: Utilizado para dados de texto simples.
    text/html: Indica que o corpo da resposta contém HTML.
    text/css: Indica que o corpo da resposta contém código CSS.
    application/json: Indica que o corpo da resposta contém dados no formato JSON.
    application/xml: Indica que o corpo da resposta contém dados no formato XML.
    image/jpeg: Indica que o corpo da resposta é uma imagem JPEG.
    image/png: Indica que o corpo da resposta é uma imagem PNG.
    audio/mpeg: Indica que o corpo da resposta é um arquivo de áudio MP3.
    video/mp4: Indica que o corpo da resposta é um arquivo de vídeo MP4.
    application/pdf: Indica que o corpo da resposta é um documento PDF.
*/