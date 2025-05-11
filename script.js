// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (window.innerWidth < 768 && nav) {
        nav.style.display = "none";
      }
    }
  });
});

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".timeline-card, .gallery-item, .quality, .message-card"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial styles for animation
document
  .querySelectorAll(".timeline-card, .gallery-item, .quality, .message-card")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

// Run animation on page load and scroll
window.addEventListener("load", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);
