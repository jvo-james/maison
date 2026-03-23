document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isActive = mobileMenu.classList.toggle("active");
      navToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });
  }

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  const thumbs = document.querySelectorAll(".thumb");
  const mainProductImage = document.getElementById("mainProductImage");

  if (thumbs.length && mainProductImage) {
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        thumbs.forEach((item) => item.classList.remove("active"));
        thumb.classList.add("active");
        mainProductImage.src = thumb.dataset.image;
      });
    });
  }

  const accordions = document.querySelectorAll(".accordion-item");

  accordions.forEach((item) => {
    const button = item.querySelector(".accordion-btn");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      accordions.forEach((acc) => acc.classList.remove("active"));

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });

  const sizeButtons = document.querySelectorAll(".size-select button");

  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sizeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const swatches = document.querySelectorAll(".swatch");

  swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      swatches.forEach((item) => item.classList.remove("active"));
      swatch.classList.add("active");
    });
  });

  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector("input");

      if (!input.value.trim()) {
        input.focus();
        return;
      }

      alert("Thank you for subscribing to Maison Élitaire.");
      input.value = "";
    });
  }
});
