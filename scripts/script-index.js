document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin)
    // gsap code here!

    const sections = document.querySelectorAll('.horizontal-sections section');
    const container = document.querySelector('.horizontal-sections');

    const scrollWrapper = document.querySelector('.horizontal-scroll-wrapper');

    if (scrollWrapper && container && sections.length > 0) {
        let totalScroll = container.scrollWidth - window.innerWidth;

        gsap.to(container, {
            x: () => `-${totalScroll}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: scrollWrapper,
                start: 'top top',
                end: () => `+=${totalScroll}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });
    }

    

    // Animation GSAP sur tous les éléments de la section .Home
    gsap.from('.Home header', {
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
    gsap.from('.Home main > img', {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.5
    });
    gsap.from('.adjectives-main', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.7
    });

    // Animation flottante sur les éléments de la page 1
    gsap.to('.rond', {
        y: 30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    gsap.to('.fleur', {
        y: -20,
        x: 10,
        rotation: 8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    gsap.to('.rectangle', {
        y: 15,
        x: -15,
        rotation: -6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    gsap.to('.sablier', {
        y: 25,
        rotation: 12,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

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
});

