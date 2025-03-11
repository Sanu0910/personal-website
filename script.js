gsap.from(".hero-text", {opacity: 0, y: -50, duration: 1, ease: "power2.out"});
gsap.from(".project-card", {opacity: 0, y: 50, duration: 1, stagger: 0.2, ease: "power2.out"});

VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.2
});
