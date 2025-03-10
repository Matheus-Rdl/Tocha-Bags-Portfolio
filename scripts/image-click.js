document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close")

    
    thumbnails.forEach(img =>{
        img.addEventListener("click", function (){
            modalImg.src = this.src;
            openModal();
        });
    });
    
    
    closeBtn.addEventListener("click", function () {
        closeModal()
    });
    
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal()
        }
    });

    function openModal() {
        modal.style.display = "flex";
        setTimeout(() => {
            modal.style.opacity = 1; // Aplica a transição de opacidade após o display ser alterado
        }, 10);
    }

    
    function closeModal() {
        modal.style.opacity = 0; 
        setTimeout(() => {
            modal.style.display = "none"; // Esconde o modal após a transição de opacidade
        }, 500);
    }
});