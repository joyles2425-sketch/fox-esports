window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 900);
});


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


const animatedElements = document.querySelectorAll(
  ".about-card, .player-card, .mission-box"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

animatedElements.forEach(element => {
  observer.observe(element);
});


const counters = document.querySelectorAll("[data-count]");
let counterStarted = false;

function startCounters() {
  if (counterStarted) return;

  counterStarted = true;

  counters.forEach(counter => {
    const target = Number(counter.dataset.count);
    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 50));

    function updateCounter() {
      current += increment;

      if (current >= target) {
        counter.textContent = target;
        return;
      }

      counter.textContent = current;
      requestAnimationFrame(updateCounter);
    }

    updateCounter();
  });
}


const statsSection = document.querySelector(".stats");

new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting) {
      startCounters();
    }
  },
  {
    threshold: 0.5
  }
).observe(statsSection);


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.style.color =
      link.getAttribute("href") === "#" + current
        ? "#e50914"
        : "";
  });
});


document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.letterSpacing = "3px";
  });

  button.addEventListener("mouseleave", () => {
    button.style.letterSpacing = "2px";
  });
});
