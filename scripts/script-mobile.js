document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin, CustomEase, Physics2DPlugin, Flip, ScrambleTextPlugin);

    // Animation GSAP pour .logo-wp sur la page 3 (mobile)
    const logoWP = document.querySelector('.page-3 .logo-wp');
    const page3 = document.querySelector('.page-3');
    if (logoWP && page3) {
        function getMaxX() {
            const sectionWidth = page3.offsetWidth;
            const logoWidth = logoWP.offsetWidth;
            return sectionWidth - logoWidth - 16;
        }
        gsap.to(logoWP, {
            x: () => getMaxX(),
            rotation: 720,
            ease: 'none',
            scrollTrigger: {
                trigger: page3,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
                invalidateOnRefresh: true,
                // markers: true
            }
        });
    }

    // Animation GSAP sur tous les éléments de la section .Home
    gsap.from('header>*', {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: 'power2.out',
        delay: 0.1
    });
    gsap.from('.title-main', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.3
    });

    // Apparition spectaculaire des éléments de la page 1
    const page1 = document.querySelector('.page-1');
    if (page1) {
        // Animation du titre avec ScrambleText
        const h2 = page1.querySelector('h2');
        if (h2) {
            gsap.fromTo(h2, {
                opacity: 0,
                y: 100,
                scrambleText: { text: "Chargement...", chars: "01!@#$%^&*" }
            }, {
                opacity: 1,
                y: 0,
                scrambleText: { text: h2.textContent, chars: "01!@#$%^&*" },
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: page1,
                    start: "top 80%",
                    once: true
                }
            });
        }

        // Timeline pour les images, déclenchée par ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: page1,
                start: "top 80%",
                once: true
            },
            onComplete: startFloatAnimationsPage1
        });

        gsap.set('.page-1 .rond', { rotation: 90 });
        tl.from('.page-1 .rond', {
            y: -200,
            opacity: 0,
            scale: 0.2,
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.2,1 0.8,0 1,1")
        })
            .from('.page-1 .fleur', {
                opacity: 0,
                physics2D: { velocity: 200, angle: 220, gravity: 400 },
                duration: 1.2
            }, "-=0.3")
            .from('.page-1 .rectangle', {
                y: -200,
                opacity: 0,
                duration: 1.1,
                ease: "rough({ template: power0.none, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"
            }, "-=0.3")
            .from('.page-1 .sablier', {
                rotationY: 720,
                opacity: 0,
                duration: 1.2,
                ease: "expo.out"
            }, "-=0.3")
            .from('.page-1 .ordi', {
                scale: 0.2,
                opacity: 0,
                duration: 1.2,
                ease: "expoScale(0.2,1,1)"
            }, "-=0.3")
            .from('.page-1 .mobile', {
                y: -300,
                opacity: 0,
                rotation: -90,
                duration: 1.2,
                ease: "elastic.out(1,0.3)"
            }, "-=0.2");
    }

    // Fonction d'animations de flottaison
    function startFloatAnimationsPage1() {
        gsap.to('.page-1 .rond', {
            y: "+=30",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        gsap.set('.page-1 .fleur', { rotation: 0 });
        gsap.to('.page-1 .fleur', {
            y: "-=20",
            x: "+=10",
            rotation: "+=8",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        gsap.to('.page-1 .rectangle', {
            y: "+=15",
            x: "-=15",
            rotation: "-=6",
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        gsap.to('.page-1 .sablier', {
            y: "+=25",
            rotation: "+=12",
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        gsap.to('.page-1 .ordi', {
            y: "+=25",
            rotation: "+=8",
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        gsap.to('.page-1 .mobile', {
            y: "+=5",
            rotation: "-=1.5",
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Animation flottante des nuages
    gsap.to('.bg-cloud', {
        y: 30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.bg-cloud-1', {
        y: -20,
        x: 10,
        rotation: 0,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Animation flottante sur les éléments de la page 2

    gsap.to('.rond-p2', {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    gsap.to('.fleur-p2', {
        y: -20,
        x: 10,
        rotation: 8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    gsap.to('.rond-p21', {
        y: 10,
        x: -15,
        rotation: 0,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Animation flottante sur les éléments de la A qui parlez vous

    gsap.to('.info :first-child', {
        y: 10,
        x: -15,
        rotation: 2,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.info :last-child', {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.nom', {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Animation GSAP TextPlugin sur le titre .Me > h2 au scroll
    const meH2 = document.querySelector('.Me > h2');
    if (meH2) {
        const originalText = meH2.textContent;
        meH2.textContent = '';
        gsap.to(meH2, {
            duration: 2,
            text: originalText,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: meH2,
                start: 'top 80%', // quand le h2 entre dans le viewport
                once: true // ne joue qu'une fois
            }
        });
    }

    // Animation GSAP sur le titre .tarifs > h2 au scroll
    const tarifsH2 = document.querySelector('.tarifs > h2');
    if (tarifsH2) {
        gsap.from(tarifsH2, {
            opacity: 0,
            y: 80,
            rotation: -8,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: tarifsH2,
                start: 'top 80%', // quand le h2 entre dans le viewport
                once: true
            }
        });
    }

    // Scroll fluide avec GSAP ScrollTo pour les liens du header
    const headerLinks = document.querySelectorAll('header > a');
    if (headerLinks.length >= 3) {
        // Le premier lien est "Qui suis-je ?", le troisième est "Tarifs"
        headerLinks[0].addEventListener('click', function (e) {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: '#Me', ease: 'power2.inOut' });
        });
        headerLinks[2].addEventListener('click', function (e) {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: '#tarifs', ease: 'power2.inOut' });
        });
    }

    // Gestion sticky + couleur du header selon la section scrollée
    const header = document.querySelector('header');
    const homeSection = document.querySelector('main');
    if (header && homeSection) {
        ScrollTrigger.create({
            trigger: homeSection,
            start: 'bottom top', // quand le bas de Home touche le haut du viewport
            onEnterBack: () => header.classList.remove('header-sticky'),
            onLeave: () => header.classList.add('header-sticky'),
            onLeaveBack: () => header.classList.remove('header-sticky'),
        });
    }

    // Scroll fluide vers le haut quand on clique sur le h1 du header
    const titleH1 = document.querySelector('.Title h1');
    if (titleH1) {
        titleH1.style.cursor = 'pointer';
        titleH1.addEventListener('click', function (e) {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2.inOut' });
        });
    }
    // Animation onde/circuit sur la page 4 (version complexe)
    function animateCircuitWave() {
        const canvas = document.getElementById('circuit-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        let maxRadius = Math.max(canvas.width, canvas.height) * 0.7;
        let progress = { r: 0 };
        let animationFrame;

        function drawComplexCircuit(ctx, centerX, centerY, r, time) {
            ctx.save();
            const branches = 10;
            const steps = 5;
            const angleStep = (Math.PI * 2) / branches;
            const branchLength = r / steps;
            for (let i = 0; i < branches; i++) {
                let angle = i * angleStep;
                let x = centerX;
                let y = centerY;
                ctx.beginPath();
                ctx.moveTo(x, y);
                for (let j = 1; j <= steps; j++) {
                    // Avance en ligne droite
                    x += Math.cos(angle) * branchLength;
                    y += Math.sin(angle) * branchLength;
                    ctx.lineTo(x, y);

                    // Noeud à chaque étape
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(x, y, 3, 0, Math.PI * 2);
                    ctx.fillStyle = '#00ffe7';
                    ctx.globalAlpha = 0.5;
                    ctx.fill();
                    ctx.restore();

                    // Ramification à angle droit (motif circuit)
                    if (j < steps) {
                        // Ramification horizontale
                        let x2 = x + branchLength * 0.7 * (i % 2 === 0 ? 1 : -1);
                        let y2 = y;
                        ctx.lineTo(x2, y2);
                        // Noeud sur la ramification
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(x2, y2, 2, 0, Math.PI * 2);
                        ctx.fillStyle = '#00ffe7';
                        ctx.globalAlpha = 0.3;
                        ctx.fill();
                        ctx.restore();
                        // Animation d'un point lumineux sur la ramification
                        let t = (Math.sin(time / 400 + i + j) + 1) / 2;
                        let px = x + (x2 - x) * t;
                        let py = y;
                        ctx.beginPath();
                        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
                        ctx.fillStyle = '#fff';
                        ctx.globalAlpha = 0.7;
                        ctx.fill();
                        ctx.globalAlpha = 0.7;
                        // Reviens sur la branche principale
                        ctx.moveTo(x, y);
                        // Ramification verticale (motif grille)
                        let x3 = x;
                        let y3 = y + branchLength * 0.7 * (j % 2 === 0 ? 1 : -1);
                        ctx.lineTo(x3, y3);
                        // Noeud sur la ramification
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(x3, y3, 2, 0, Math.PI * 2);
                        ctx.fillStyle = '#00ffe7';
                        ctx.globalAlpha = 0.3;
                        ctx.fill();
                        ctx.restore();
                        // Animation d'un point lumineux sur la ramification verticale
                        let t2 = (Math.cos(time / 400 + i - j) + 1) / 2;
                        let py2 = y + (y3 - y) * t2;
                        ctx.beginPath();
                        ctx.arc(x, py2, 1.5, 0, Math.PI * 2);
                        ctx.fillStyle = '#fff';
                        ctx.globalAlpha = 0.7;
                        ctx.fill();
                        ctx.globalAlpha = 0.7;
                        ctx.moveTo(x, y);
                    }
                }
                ctx.strokeStyle = '#00ffe7';
                ctx.lineWidth = 1.5;
                ctx.globalAlpha = 0.5;
                ctx.stroke();
                // Animation d'un point lumineux sur la branche principale
                let t = (Math.sin(time / 600 + i) + 1) / 2;
                let px = centerX + Math.cos(angle) * branchLength * steps * t;
                let py = centerY + Math.sin(angle) * branchLength * steps * t;
                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.globalAlpha = 0.7;
                ctx.shadowColor = '#00ffe7';
                ctx.shadowBlur = 6;
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.globalAlpha = 0.5;
            }
            ctx.restore();
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.beginPath();
            ctx.arc(centerX, centerY, progress.r, 0, Math.PI * 2);
            // Dégradé dynamique
            let grad = ctx.createRadialGradient(centerX, centerY, progress.r * 0.7, centerX, centerY, progress.r);
            grad.addColorStop(0, '#00ffe7');
            grad.addColorStop(1, '#001b41');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 8;
            // Ajout d'un fondu en fin d'animation
            let fade = 1;
            if (progress.r > maxRadius * 0.85) {
                fade = 1 - (progress.r - maxRadius * 0.85) / (maxRadius * 0.15);
                fade = Math.max(0, Math.min(1, fade));
            }
            ctx.globalAlpha = 0.8 * fade;
            ctx.shadowColor = '#00ffe7';
            ctx.shadowBlur = 30 * fade;
            ctx.stroke();
            ctx.restore();
            // Circuit complexe avec animation
            if (fade > 0) {
                drawComplexCircuit(ctx, centerX, centerY, progress.r, Date.now());
            }
        }

        function renderLoop() {
            render();
            animationFrame = requestAnimationFrame(renderLoop);
        }

        gsap.fromTo(progress, { r: 0 }, {
            r: maxRadius,
            duration: 1.5,
            ease: "power2.out",
            onStart: () => {
                centerX = canvas.width / 2;
                centerY = canvas.height / 2;
                maxRadius = Math.max(canvas.width, canvas.height) * 0.7;
                // Mettre le texte en grand (sans yoyo)
                const h2 = document.querySelector('.page-4 > h2');
                const h3 = document.querySelector('.page-4 > h3');
                if (h2 && h3) {
                    gsap.set(h2, { scale: 1 });
                    gsap.set(h3, { scale: 1 });
                }
                // Animation du glow sur IONOS
                const ionos = document.querySelector('.page-4 h3 span');
                if (ionos) {
                    gsap.fromTo(ionos,
                        { color: '#001b41', textShadow: '0 0 0px #00ffe7' },
                        {
                            color: '#00bfff', textShadow: '0 0 24px #00ffe7, 0 0 8px #00bfff', duration: 1.5, ease: 'power2.out',
                            onComplete: () => {
                                gsap.to(ionos, { color: '#001b41', textShadow: '0 0 0px #00ffe7', duration: 0.8, delay: 0.2 });
                            }
                        }
                    );
                }
                renderLoop();
            },
            onUpdate: render,
            onComplete: () => {
                cancelAnimationFrame(animationFrame);
            }
        });
    }

    // Lancer l'animation en boucle toutes les 5 secondes
    setInterval(animateCircuitWave, 7000);
    // Lancer une première fois au chargement
    animateCircuitWave();

    // --- Ajout pour scroll après redirection depuis contact.html ---
    const scrollTarget = localStorage.getItem('scrollToTarget');
    if (scrollTarget) {
        if (scrollTarget === 'top') {
            gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2.inOut' });
        } else {
            gsap.to(window, { duration: 1, scrollTo: scrollTarget, ease: 'power2.inOut' });
        }
        localStorage.removeItem('scrollToTarget');
    }

    // Flottaison page 5 : appliquer la rotation de base AVANT l'animation
    gsap.set('.page5-content .rond-p2', { rotation: -90 });
    gsap.to('.page5-content .rond-p2', {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    gsap.set('.page5-content .fleur-p2', { rotation: -80 });
    gsap.to('.page5-content .fleur-p2', {
        y: -20,
        x: 10,
        rotation: 2,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    // Animations GSAP personnalisées pour les pages 2 à 5
        // PAGE 2
        gsap.from('.page-2 > h2', {
            scrollTrigger: {
                trigger: '.page-2',
                start: "top 80%",
            },
            y: -80,
            opacity: 0,
            ease: "bounce.out",
            duration: 1
        });
        gsap.from('.page-2 > h3', {
            scrollTrigger: {
                trigger: '.page-2',
                start: "top 80%",
            },
            x: -100,
            opacity: 0,
            ease: "back.out(1.7)",
            duration: 1,
            delay: 0.2
        });

        // PAGE 3
        gsap.from('.page-3 > h2', {
            scrollTrigger: {
                trigger: '.page-3',
                start: "top 80%",
            },
            x: -120,
            rotation: -20,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.7)"
        });
        gsap.from('.page-3 > h3', {
            scrollTrigger: {
                trigger: '.page-3',
                start: "top 80%",
            },
            opacity: 0,
            scale: 1.3,
            duration: 1.1,
            delay: 0.2,
            ease: "power2.out"
        });

        // PAGE 4 
        gsap.from('.page-4 > h2', {
            scrollTrigger: {
                trigger: '.page-4',
                start: "top 80%", // quand le haut de la section atteint 80% de la hauteur du viewport
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
        gsap.from('.page-4 > h3', {
            scrollTrigger: {
                trigger: '.page-4',
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out"
        });

        // PAGE 5
        gsap.from('.page-5 > h2', {
            scrollTrigger: {
                trigger: '.page-5',
                start: "top 80%",
            },
            rotationX: 90,
            opacity: 0,
            transformOrigin: "top center",
            duration: 1,
            ease: "back.out(1.7)"
        });
        gsap.from('.page-5 > h3', {
            scrollTrigger: {
                trigger: '.page-5',
                start: "top 80%",
            },
            y: 80,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "bounce.out"
        });
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



