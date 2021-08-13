export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind(this) ao callback para fazer referencia ao objeto da class
    this.toggleModal = this.toggleModal.bind(this);
    this.clickOutSide = this.clickOutSide.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle('ativo');
  }

  clickOutSide(event) {
    event.preventDefault();
    if (event.target === this.containerModal) this.toggleModal(event);
  }

  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.toggleModal);
    this.botaoFechar.addEventListener('click', this.toggleModal);
    this.containerModal.addEventListener('click', this.clickOutSide);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }

    return this;
  }
}
