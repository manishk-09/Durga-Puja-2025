document.addEventListener("DOMContentLoaded", () => {
  // =====================
  // MENU TOGGLE FOR MOBILE
  // =====================
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");  // ✅ match CSS
    });
  }


  // =====================
  // GENERIC IMAGE FADE-IN ANIMATION
  // =====================
  function animateImages(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const images = section?.querySelectorAll(".fade-in");
    let hasAnimated = false;

    if (!section || !images.length) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            images.forEach((img, index) => {
              setTimeout(() => {
                img.classList.add("visible");
              }, index * 400); // stagger 0.4s delay
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
  }

  // Run for your old photo sections
  animateImages(".old-photo1");
  animateImages(".old-photo2");

  // =====================
  // COMMITTEE MEMBER CARDS ANIMATION
  // =====================
  function animateCards(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const cards = section?.querySelectorAll(".member-card");
    let hasAnimated = false;

    if (!section || !cards.length) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 200); // stagger 0.2s delay
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
  }

  // Run for your committee member section
  animateCards(".commitee-member");

  // =====================
  // ACTIVE NAV LINK HIGHLIGHT
  // =====================
  const links = document.querySelectorAll(".nav-links a");
  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html"; // default page
  }

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
