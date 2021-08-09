export default function initAccordion() {
  const accordionLIst = document.querySelectorAll("[data-anime='accordion'] dt");

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('accordionActive');
  }

  if (accordionLIst.length) {
    accordionLIst[0].classList.add('ativo');
    accordionLIst[0].nextElementSibling.classList.add('accordionActive');

    accordionLIst.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
