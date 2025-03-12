const imageUrl = "assets/clave-de-sol.png"; // Substitua pelo caminho da sua imagem

// Função para gerar um número aleatório dentro de um intervalo
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para adicionar imagens repetidas a cada 300px
function addRepeatingImages() {
  const pageHeight = document.body.scrollHeight - 150; // Altura total da página

  for (let y = 0; y < pageHeight; y += 200) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-clave");

    // Posicionamento da imagem
    img.style.top = `${y}px`; // Define a posição fixa vertical a cada 300px
    img.style.left = `${getRandomInt(10, window.innerWidth - 150)}px`; // Posição horizontal aleatória

    document.body.appendChild(img);
  }
}

// Chama a função quando a página carregar
window.onload = addRepeatingImages;
