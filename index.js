const express = require('express');
const app = express();
const port = 3000;  

app.listen(300, (error) => {
    if(error) {
        console.log('Erro detectado');
    }
    console.log('Servidor rodando na porta 3000');
});

// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Downloader de Vídeos do YouTube</title>
//     <link rel="stylesheet" href="./style.css">
// </head>
// <body>
//     <div class="container">
//         <h1>Baixe o vídeo do YouTube como MP3</h1>
//         <input type="text" id="videoUrl" placeholder="Cole o link do vídeo aqui">
//         <button id="downloadBtn">Baixar MP3</button>
//         <p id="message"></p>
//     </div>
//     <script src="./script.js"></script>
// </body>
// </html>