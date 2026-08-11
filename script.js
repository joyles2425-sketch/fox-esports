// ===============================
// FOX ESPORTS - SCRIPT.JS
// ===============================

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });
}


// CLOSE MOBILE MENU WHEN A LINK IS CLICKED
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("open");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }
    });
});


// SCROLL ANIMATIONS
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealItems.forEach(item => {
    revealObserver.observe(item);
});


// ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// SMALL PARALLAX EFFECT FOR THE FOX EMBLEM
const foxEmblem = document.querySelector(".fox-emblem");

window.addEventListener("mousemove", (event) => {

    if (!foxEmblem) return;

    const x = (window.innerWidth / 2 - event.clientX) / 80;
    const y = (window.innerHeight / 2 - event.clientY) / 80;

    foxEmblem.style.transform =
        `translate(${x}px, ${y}px) rotate(-4deg)`;

});


// BUTTON CLICK EFFECT
document.querySelectorAll(".btn, .nav-cta").forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {
            button.style.transform = "";
        }, 120);

    });

});


// FOX WEBSITE LOADED
console.log("FOX Esports website loaded successfully 🦊🔥");
