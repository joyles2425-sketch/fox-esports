// ==============================
// FOX ESPORTS - SCRIPT.JS
// ==============================


// MOBILE MENU
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
}


// CLOSE MOBILE MENU AFTER CLICKING A LINK
const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
    });
});


// ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// SCROLL ANIMATION FOR FEATURE CARDS
const featureCards = document.querySelectorAll(".feature-card");

const cardObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


featureCards.forEach((card) => {
    cardObserver.observe(card);
});


// BUTTON CLICK EFFECT
const buttons = document.querySelectorAll(
    ".primary-button, .secondary-button, .discord-button"
);

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {
            button.style.transform = "";
        }, 120);

    });

});


// PREVENT EMPTY LINKS FROM JUMPING TO THE TOP
const emptyLinks = document.querySelectorAll('a[href="#"]');

emptyLinks.forEach((link) => {

    link.addEventListener("click", (event) => {
        event.preventDefault();
    });

});


// FOX HERO PARALLAX EFFECT
const foxArt = document.querySelector(".fox-art");

window.addEventListener("mousemove", (event) => {

    if (!foxArt) return;

    const x = (window.innerWidth / 2 - event.clientX) / 60;
    const y = (window.innerHeight / 2 - event.clientY) / 60;

    foxArt.style.transform =
        `translate(${x}px, ${y}px) translateY(-50%)`;

});


// CONSOLE MESSAGE
console.log(
    "%c FOX ESPORTS ",
    "color: red; font-size: 25px; font-weight: bold;"
);

console.log(
    "%c Built different. 🦊",
    "color: white; font-size: 14px;"
);
