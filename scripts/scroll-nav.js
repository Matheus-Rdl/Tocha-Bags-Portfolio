document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const nav = document.getElementById('nav');

        window.scrollTo({
            top: targetElement.offsetTop - 40,
            behavior: 'smooth'
        });

        nav.classList.remove('nav-open');

    });
});