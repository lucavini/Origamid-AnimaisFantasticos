export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      let start = total - 100;

      const timer = setInterval(() => {
        start += 1;
        numero.innerText = start;
        if (start >= total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('animeLeft')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector('.grid-section.numeros');

  observer.observe(observerTarget, { attributes: true });
}
