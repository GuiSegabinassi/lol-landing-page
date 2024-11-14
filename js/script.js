// Menu Mobile Dinâmico
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenu.classList.toggle("is-active");
});

// Animações de Scroll (Scroll Reveal)
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

// Carrossel para a Seção de News
let currentSlide = 0;
const slides = document.querySelectorAll(".news-card");
const totalSlides = slides.length;

document.querySelector(".next-slide").addEventListener("click", () => {
  moveToNextSlide();
});

document.querySelector(".prev-slide").addEventListener("click", () => {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("visible");
    slide.classList.add("hidden");
  }
  slides[currentSlide].classList.add("visible");
}

function moveToNextSlide() {
  if (currentSlide === totalSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (currentSlide === 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide--;
  }
  updateSlidePosition();
}

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Modal para Mais Informações sobre Campeões
const modal = document.getElementById("champion-modal");
const modalButtons = document.querySelectorAll(".btn-small");
const closeButton = document.querySelector(".close-button");

modalButtons.forEach(button => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
