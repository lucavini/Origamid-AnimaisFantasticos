export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.5;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionTop = sectionTop <= windowMetade;

        if (isSectionTop) {
          section.classList.add("animeLeft");
        } else if (section.classList.contains("animeLeft")) {
          section.classList.remove("animeLeft");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}
