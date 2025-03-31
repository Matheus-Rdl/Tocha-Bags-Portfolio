// Seleciona o botão e o menu
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const nav = document.getElementById("nav");

// Adiciona um evento de clique no botão
menuToggle.addEventListener("click", function () {
  // Alterna a classe 'nav-open' para mostrar/ocultar o menu
  nav.classList.add("nav-open");
});

menuClose.addEventListener("click", function () {
  nav.classList.remove("nav-open");
});
