import AnimaNumeros from './animaNumeros.js';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Animação crescente dos numeros
  function animarNumeros() {
    const animaNumeros = new AnimaNumeros(
      '[data-numero]',
      'animeLeft',
      '.grid-section.numeros'
    );
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      // ativa preencher e anima os números
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animarNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
