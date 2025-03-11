// Scroll Animations
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    function revealSection() {
        sections.forEach((section) => {
            let sectionPos = section.getBoundingClientRect().top;
            let screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSection);
    revealSection();
});

// Tilt Effect on Project Cards
VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.2
});
