const express = require('express');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const app = express();
const port = 3000;

// Middleware para permitir requisições JSON
app.use(express.json());

// Endpoint para converter vídeo do YouTube em MP3
app.post('/convert', (req, res) => {
  const videoUrl = req.body.url;

  if (!videoUrl || !ytdl.validateURL(videoUrl)) {
    return res.status(400).json({ error: 'URL inválida' });
  }

  const audioStream = ytdl(videoUrl, { quality: 'highestaudio' });

  res.setHeader('Content-Disposition', 'attachment; filename="audio.mp3"');
  res.setHeader('Content-Type', 'audio/mpeg');

  ffmpeg(audioStream)
    .audioCodec('libmp3lame')
    .toFormat('mp3')
    .pipe(res, { end: true })
    .on('error', (err) => {
      console.error('Erro na conversão:', err);
      res.status(500).json({ error: 'Erro ao converter o vídeo' });
    });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});