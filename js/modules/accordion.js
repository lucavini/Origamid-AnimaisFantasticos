export default function initAccordion() {
  const accordionLIst = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );

  if (accordionLIst.length) {
    accordionLIst[0].classList.add("ativo");
    accordionLIst[0].nextElementSibling.classList.add("accordionActive");

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("accordionActive");
    }

    accordionLIst.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
