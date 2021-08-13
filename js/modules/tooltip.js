export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        this.tooltipBox.style.left = `${event.pageX + 20}px`;
      },
    };

    this.onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', this.onMouseLeave);
        this.element.removeEventListener('mousemove', this.onMouseMove);
      },
    };

    this.onMouseOver = this.onMouseOver.bind(this);
  }

  criarTooltipBox(element) {
    const isElementInclude = Array.from(this.tooltips).includes(element);
    const tooltipBox = document.createElement('div');
    let text;
    if (isElementInclude) text = element.getAttribute('aria-label');

    tooltipBox.innerText = text;
    tooltipBox.classList.add('tooltip');

    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  onMouseOver(item) {
    const tooltipBox = this.criarTooltipBox(item);

    this.onMouseMove.tooltipBox = tooltipBox;
    item.addEventListener('mousemove', this.onMouseMove);

    this.onMouseLeave.tooltipBox = tooltipBox;
    this.onMouseLeave.element = item;
    item.addEventListener('mouseleave', this.onMouseLeave);
  }

  init() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', () => this.onMouseOver(item));
    });

    return this;
  }
}
