// ONYX Esports — main JavaScript

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // Add a scrolled effect to the navigation bar
  const header = document.querySelector(".nav");

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });

  // Automatically update the footer year
  const year = document.querySelector("footer .year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
