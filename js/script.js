// ==========================
// MOBILE NAVIGATION
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("ri-menu-line");
    menuToggle.classList.toggle("ri-close-line");
  });
}

// ==========================
// CLOSE MOBILE MENU
// ==========================

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.add(".ri-menu-line")
    menuToggle.classList.remove(".ri-close-line")
  });
});

// ==========================
// CURRENT YEAR FOOTER
// ==========================

const year = document.querySelector(".year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
  ".about, .card, .hours-box, .contact-grid, iframe, .menu-card",
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
