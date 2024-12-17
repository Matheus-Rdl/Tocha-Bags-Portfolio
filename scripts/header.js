// Array com os caminhos das imagens
const imagens1 = ['assets/header/img2.png', 'assets/header/img3.png'];
const imagens2 = ['assets/header/img1.png', 'assets/header/img4.png'];
let indice1 = 0;
let indice2 = 0;

function mudarImagem1() {
    const imagemElement1 = document.getElementById('img2');

    imagemElement1.style.opacity = '0';
    imagemElement1.style.transform = 'translate(-20%)'

    setTimeout(() => {
        indice1 = (indice1 + 1) % imagens1.length; 
        document.getElementById('img2').src = imagens1[indice1];
        
        ajustarTamanhoImagem1(imagemElement1);

        setTimeout(() => {
            imagemElement1.style.opacity = '1';
            imagemElement1.style.transform = 'translate(0)';
        }, 20);
    }, 1000);

}

function ajustarTamanhoImagem1(imagemElement1) {
    const larguraTela = window.innerWidth;
    if (larguraTela <= 800) {
        if (imagemElement1.src.includes('img3.png')) {
            imagemElement1.style.width = '160px';
            imagemElement1.style.margin = '0 80px 100px 0';
        }else{
            imagemElement1.style.width = '200px';
            imagemElement1.style.margin = '0 60px 135px 0';
        }
    } else{
        if (imagemElement1.src.includes('img3.png')) {
            imagemElement1.style.width = '260px';
            imagemElement1.style.margin = '0 150px 100px 0';
        }else{
            imagemElement1.style.width = '300px';
            imagemElement1.style.margin = '0 100px 150px 0';
        }
    }

}

// Função para trocar de imagem
function mudarImagem2() {
    const imagemElement2 = document.getElementById('img1'); // Guarda o elemento da imagem em uma variavel
    imagemElement2.style.opacity = '0'; //zera a opacidade da imagem
    imagemElement2.style.transform = 'translateX(20%)'; // mocve a imagem para a direita

    //Um serTime out para a troca de imagem
    setTimeout(() => {
        indice2 = (indice2 + 1) % imagens2.length; // Vai para a próxima imagem, e volta ao começo quando atingir o fim
        document.getElementById('img1').src = imagens2[indice2]; // Pega o Id da imagem e a imagem que vai ser mostrada segundo o array
        ajustarTamanhoImagem2(imagemElement2); 

        setTimeout(() =>{
            imagemElement2.style.opacity = '1';// seta a opacidade para normal 
            imagemElement2.style.transform = 'translateX(0)'; //Coloca a imagem na posisão original
        },20); // Um pequeno delay para garantir que a nova imagem seja posicionada corretament
    },1000 ); // O tempo de espera é igual ao tempo das transições de animação
}

// Função para ajustar o tamanho da imagem
function ajustarTamanhoImagem2(imagemElement2) {
    const larguraTela = window.innerWidth;
    //Criado para ajustar diferentes tamanhos de imagens
    if (larguraTela <= 800) {
        if (imagemElement2.src.includes('img4.png')) {
            imagemElement2.style.width = '150px';
            imagemElement2.style.margin = '0 15px 25px 0'
        }else{
            imagemElement2.style.width = '230px';
            imagemElement2.style.margin = '0 -30px 25px 0'
        }
    } else {
        if (imagemElement2.src.includes('img4.png')) {
            imagemElement2.style.width = '220px';
            imagemElement2.style.margin = '0 40px 0 0'
        }else{
            imagemElement2.style.width = '330px';
            imagemElement2.style.margin = '0'
        }
    }
}

// Chama a função a cada X segundos
setInterval(mudarImagem1, 7000);
setInterval(mudarImagem2, 5500);