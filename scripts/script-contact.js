document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    const img = document.querySelector("main img");
    const main = document.querySelector("main");

    // Rendre l'image plus petite
    img.style.width = "8%";

    // Positionner l'image en absolu par rapport à main
    img.style.position = "absolute";
    img.style.left = "0";
    img.style.top = "0";
    img.style.zIndex = "-10";
    img.style.pointerEvents = "none"; // Pour ne pas bloquer les clics

    // Suivi du curseur dans le main
    main.addEventListener("mousemove", (e) => {
        const mainRect = main.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        const imgWidth = imgRect.width;
        const imgHeight = imgRect.height;

        // Position du curseur relative au main
        let x = e.clientX - mainRect.left - imgWidth / 2;
        let y = e.clientY - mainRect.top - imgHeight / 2;

        // Limiter pour ne pas sortir du main
        x = Math.max(0, Math.min(x, mainRect.width - imgWidth));
        y = Math.max(0, Math.min(y, mainRect.height - imgHeight));

        gsap.to(img, { x: x, y: y, duration: 0.2, ease: "power2.out" });
    });
    
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

