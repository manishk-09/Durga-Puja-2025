 document.addEventListener("DOMContentLoaded", () => {
  // MENU TOGGLE FOR MOBILE
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // IMAGE FADE-IN ANIMATION
  function animateImages(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const images = section?.querySelectorAll('.fade-in');
    let hasAnimated = false;

    if (!section || !images.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          images.forEach((img, index) => {
            setTimeout(() => {
              img.classList.add('visible');
            }, index * 400); // 0.4s delay per image
          });
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(section);
  }

  animateImages('.old-photo1');
  animateImages('.old-photo2');
});

  const btn = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');
  btn.addEventListener('click', () => links.classList.toggle('open'));

