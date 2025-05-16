document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    // Redirection et scroll fluide vers index.html avec ancre pour les liens du header
    const headerLinks = document.querySelectorAll('header > a');
    const titleH1 = document.querySelector('.Title h1');

    // Fonction pour rediriger avec info de scroll
    function redirectToIndexAndScroll(target) {
        localStorage.setItem('scrollToTarget', target);
        window.location.href = '/index.html';
    }

    if (headerLinks.length >= 3) {
        // "Qui suis-je ?"
        headerLinks[0].addEventListener('click', function(e) {
            e.preventDefault();
            redirectToIndexAndScroll('#Me');
        });
        // "Tarifs"
        headerLinks[2].addEventListener('click', function(e) {
            e.preventDefault();
            redirectToIndexAndScroll('#tarifs');
        });
        // "Contact" (déjà sur la page, donc rien à faire)
    }

    if (titleH1) {
        titleH1.style.cursor = 'pointer';
        titleH1.addEventListener('click', function(e) {
            e.preventDefault();
            redirectToIndexAndScroll('top');
        });
    }
});

