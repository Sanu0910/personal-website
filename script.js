const quotes = [
    "“The important thing is not to stop questioning. Curiosity has its own reason for existing.” – Albert Einstein",
    "“If you can't explain it simply, you don't understand it well enough.” – Richard Feynman",
    "“Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.” – Albert Einstein",
    "“The first principle is that you must not fool yourself and you are the easiest person to fool.” – Richard Feynman"
];

let index = 0;

function changeQuote() {
    document.getElementById("quoteText").innerText = quotes[index];
    index = (index + 1) % quotes.length;
}

setInterval(changeQuote, 5000);

gsap.from(".hero-text", {opacity: 0, y: -50, duration: 1});
gsap.from(".project-card", {opacity: 0, x: -50, duration: 1, stagger: 0.3});
