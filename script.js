// document.getElementById("downloadBtn").addEventListener("click", function () {
//   const videoUrl = document.getElementById("videoUrl").value;
//   const messageElement = document.getElementById("message");

//   // Aqui você precisaria de uma API para converter o vídeo em MP3
//   // Este é um exemplo fictício de como você poderia chamar uma API
//   if (videoUrl) {
//     messageElement.textContent = "Processando...";

//     // Exemplo de chamada a uma API (substitua pela sua API real)
//     fetch(
//       "https://rapidapi.com/ytjar/api/youtube-mp36" +
//         encodeURIComponent(videoUrl)
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           // Aqui você pode criar um link para download
//           const link = document.createElement("a");
//           link.href = data.downloadUrl; // URL do MP3 retornada pela API
//           link.download = "video.mp3";
//           document.body.appendChild(link);
//           link.click();
//           document.body.removeChild(link);
//           messageElement.textContent = "Download iniciado!";
//         } else {
//           messageElement.textContent = "Erro ao processar o vídeo.";
//         }
//       })
//       .catch((error) => {
//         console.error("Erro:", error);
//         messageElement.textContent = "Erro ao conectar à API.";
//       });
//   } else {
//     messageElement.textContent = "Por favor, insira um link válido.";
//   }
// });

document.getElementById("downloadBtn").addEventListener("click", function () {
  const videoUrl = document.getElementById("videoUrl").value;
  const messageElement = document.getElementById("message");

  if (videoUrl) {
    messageElement.textContent = "Processando...";

    // Chamada à API com o parâmetro de consulta correto
    fetch(
      `https://rapidapi.com/ytjar/api/youtube-mp36?url=${encodeURIComponent(
        videoUrl
      )}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          const link = document.createElement("a");
          link.href = data.downloadUrl; // URL do MP3 retornada pela API
          link.download = "video.mp3";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          messageElement.textContent = "Download iniciado!";
        } else {
          messageElement.textContent = "Erro ao processar o vídeo.";
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
        messageElement.textContent = "Erro ao conectar à API.";
      });
  } else {
    messageElement.textContent = "Por favor, insira um link válido.";
  }
});
