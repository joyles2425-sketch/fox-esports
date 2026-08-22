// FOX ESPORTS - script.js

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });

    // Close mobile menu after clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

// Automatically update the copyright year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Add a small effect when scrolling
window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
