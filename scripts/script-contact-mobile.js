document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    // Redirection et scroll fluide vers index.html avec ancre pour les liens du header
    const headerLinks = document.querySelectorAll('.mobile-menu > nav > a');
    const titleH1 = document.querySelector('.Title h1');

    // Fonction pour rediriger avec info de scroll
    function redirectToIndexAndScroll(target) {
        localStorage.setItem('scrollToTarget', target);
        window.location.href = '../pages/index-mobile.html';
    }

    if (headerLinks.length >= 3) {
        // "Qui suis-je ?"
        headerLinks[0].addEventListener('click', function(e) {
            e.preventDefault();
            redirectToIndexAndScroll('#Me');
        });
        // "Tarifs"
        headerLinks[1].addEventListener('click', function(e) {
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
    // Menu mobile
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    if (burger && mobileMenu && closeMenu) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.style.display = 'flex';
            setTimeout(() => mobileMenu.classList.add('open'), 10);
            document.body.style.overflow = 'hidden';
        });
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            setTimeout(() => {
                mobileMenu.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        });
        // Fermer le menu si on clique en dehors
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMenu.click();
            }
        });
        // Animation sur les boutons du menu mobile
        const menuLinks = mobileMenu.querySelectorAll('nav a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Ajoute la classe d'animation
                link.classList.add('menu-btn-press');
                // Après l'animation, retire la classe et ferme le menu
                setTimeout(() => {
                    link.classList.remove('menu-btn-press');
                    // Redirige après l'animation
                    if (link.getAttribute('href').startsWith('#')) {
                        // Scroll fluide vers l'ancre
                        const target = link.getAttribute('href');
                        gsap.to(window, { duration: 1, scrollTo: target, ease: 'power2.inOut' });
                        // Ferme le menu
                        closeMenu.click();
                    } else {
                        // Pour les liens externes (contact)
                        window.location.href = link.getAttribute('href');
                    }
                }, 180);
            });
        });
    }
});

