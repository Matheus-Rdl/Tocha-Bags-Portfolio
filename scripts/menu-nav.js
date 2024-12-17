// Aguardar o carregamento completo do documento
window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('menu-toggle');

    // Verifica se a rolagem chegou ao topo do menu
    if (window.scrollY >= 450) {
        menu.classList.add('menu-fixed');
        menu.classList.remove('menu');
        nav.classList.add('nav-fixed');
        nav.classList.remove('nav');
        toggle.classList.add('menu-toggle-fixed');
        toggle.classList.remove('menu-toggle');
    } else {
        menu.classList.add('menu');
        menu.classList.remove('menu-fixed');
        nav.classList.add('nav');
        nav.classList.remove('nav-fixed');
        toggle.classList.add('menu-toggle');
        toggle.classList.remove('menu-toggle-fixed')
    }
});