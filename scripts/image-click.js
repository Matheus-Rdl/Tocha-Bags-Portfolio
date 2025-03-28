document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");
  const modalOtherImgs = document.getElementById("modalOtherImgs");
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");
  let img3 = document.createElement("img");

  thumbnails.forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = img.src; //this.src
      openModal();
    });
  });

  closeBtn.addEventListener("click", function () {
    closeModal();
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  function openModal() {
    img1.src = "assets/header/img1.png";
    img2.src = "assets/header/img2.png";
    img3.src = "assets/header/img3.png";

    img1.classList.add("modal-imgs");
    img2.classList.add("modal-imgs");
    img3.classList.add("modal-imgs");

    modalOtherImgs.appendChild(img1);
    modalOtherImgs.appendChild(img2);
    modalOtherImgs.appendChild(img3);

    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.opacity = 1; // Aplica a transição de opacidade após o display ser alterado
    }, 10);
    prepareOtherImgs();
  }

  function closeModal() {
    modal.style.opacity = 0;
    setTimeout(() => {
      modal.style.display = "none"; // Esconde o modal após a transição de opacidade
      modalOtherImgs.removeChild(img1);
      modalOtherImgs.removeChild(img2);
      modalOtherImgs.removeChild(img3);
    }, 200);
  }
});

function prepareOtherImgs() {
  const thumbnails = document.querySelectorAll(".modal-imgs");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      changeImage(thumbnail);
    });
  });
}
