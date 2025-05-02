// imageclick.js - Modal functionality
document.addEventListener("DOMContentLoaded", function() {
  // Initialize modal elements
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".close");
  const modalOtherImgs = document.getElementById("modalOtherImgs");
  
  // Listen for custom image click events
  window.addEventListener('imageClick', function(e) {
    const { src, title, description, otherImages } = e.detail;
    openModal(src, title, description, otherImages);
  });

  // Close modal handlers
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function(e) {
    if (e.target === modal) closeModal();
  });

  function openModal(mainSrc, title, description, otherImages = []) {
    // Set main image
    modalImg.src = mainSrc;

    // Set Title
    modalTitle.textContent = title;

    // Set description
    modalDescription.textContent = description;
    
    // Clear previous additional images
    modalOtherImgs.innerHTML = '';
    
    // Add other images if available
    otherImages.forEach((imgSrc, index) => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.classList.add('modal-imgs');
      img.addEventListener('click', () => changeImage(imgSrc));
      modalOtherImgs.appendChild(img);
    });

    // Show modal with animation
    document.body.style.overflow = 'hidden';
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.opacity = 1;
    }, 10);
  }

  function closeModal() {
    modal.style.opacity = 0;
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
  }

  function changeImage(newSrc) {
    modalImg.src = newSrc;
  }
});