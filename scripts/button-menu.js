// Seleciona o botão e o menu
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

// Adiciona um evento de clique no botão
menuToggle.addEventListener('click', function() {
    // Alterna a classe 'nav-open' para mostrar/ocultar o menu
    nav.classList.toggle('nav-open');
    menuToggle.classList.toggle('menu-toggle-fixed');
});