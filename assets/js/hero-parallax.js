const heroBg = document.querySelector(".hero-parallax-bg");

if (heroBg) {
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    heroBg.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
  });
}

