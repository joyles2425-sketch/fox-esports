// FOX ESPORTS WEBSITE
// Mobile navigation

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close the menu when a navigation link is clicked

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Scroll reveal animations

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
