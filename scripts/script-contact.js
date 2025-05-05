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
});

