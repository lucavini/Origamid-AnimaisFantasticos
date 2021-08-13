export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
    this.accordionActive = 'accordionActive';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.accordionActive);
  }

  // adiciona os eventos ao accordion
  addAcordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordionList) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAcordionEvent();
    }
    return this;
  }
}
