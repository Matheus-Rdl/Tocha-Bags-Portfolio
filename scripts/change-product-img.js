const thumbnails = document.querySelectorAll(".modal-imgs");
let isPaused = false;

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    changeImage(thumbnail);
  });
});

function changeImage(thumbnail) {
  if (isPaused) return;
  isPaused = true;

  let mainImg = document.getElementById("modalImg");
  let tempSrc = mainImg.src;

  mainImg.style.opacity = "0.5";

  setTimeout(() => {
    mainImg.src = thumbnail.src;
    mainImg.style.opacity = "1";
    isPaused = false;
  }, 200);
}
