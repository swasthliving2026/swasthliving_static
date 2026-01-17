document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");

  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });
});

