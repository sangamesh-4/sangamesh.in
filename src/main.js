import "./style.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Achievements } from "./components/Achievements";

// Mount App Components
document.querySelector("#app").innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${About()}
    ${Skills()}
    ${Experience()}
    ${Projects()}
    ${Achievements()}
    ${Contact()}

    <!-- Floating Back-to-Top Button -->
    <button id="back-to-top" aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>

    <!-- Toast Notification -->
    <div id="toast-notification">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span id="toast-message">Email copied to clipboard!</span>
    </div>
`;

// Dynamic Typewriter Effect Component Logic
function initTypewriter() {
  const typewriterEl = document.getElementById("typewriter");
  if (!typewriterEl) return;

  const roles = [
    "Data Science & Machine Learning Engineer",
    "GraphRAG & AI Pipeline Specialist",
    "Generative AI & MLOps Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseEnd = 2000;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// Direct Section & Card-Level Scroll Reveal Observer
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    "section, .card, .glass-card, .skill-card, .project-card, .about-card, .achievement-card, .timeline-card, .stat-card"
  );

  revealElements.forEach((el) => {
    el.classList.add("reveal");
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));
}

// Active Navbar Link Highlight Observer
function initActiveNavbar() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-item");

  if (!sections.length || !navItems.length) return;

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${currentId}`) {
        item.classList.add("active");
      }
    });
  });
}

// Toast Notification Helper
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2500);
}

// One-Click Email Copying Handler
function initEmailCopy() {
  const copyTriggers = document.querySelectorAll(".copy-email-trigger, .copy-badge-btn");
  copyTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = "sanguh411@gmail.com";
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showToast("Email (sanguh411@gmail.com) copied!");
        })
        .catch(() => {
          showToast("Copied: sanguh411@gmail.com");
        });
    });
  });
}

// Floating Back-to-Top Observer
function initBackToTop() {
  const bttBtn = document.getElementById("back-to-top");
  if (!bttBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      bttBtn.classList.add("visible");
    } else {
      bttBtn.classList.remove("visible");
    }
  });

  bttBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Dynamic Project Category Filter Handler
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll("#project-filters .filter-btn");
  const projectCards = document.querySelectorAll("#projects-grid .project-card");

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedCategory = btn.getAttribute("data-filter");

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (selectedCategory === "All" || cardCat === selectedCategory) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });
}

// Initialize all features on DOM ready
function initApp() {
  initTypewriter();
  initScrollReveal();
  initActiveNavbar();
  initEmailCopy();
  initBackToTop();
  initProjectFiltering();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}