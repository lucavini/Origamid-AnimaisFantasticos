export default function initScrollSuave() {
  const internalLinks = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    //   Forma alternativa
    //   const topo = section.offsetTop;
    //   window.scrollTo({
    //     top: topo,
    //     behavior: "smooth",
    //   });
  }

  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
