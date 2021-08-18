import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDownMenu from './modules/dropDownMenu.js';
import MenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetchAnimais.js';
import fetchBitcoin from './modules/fetchBitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.init();

const menuMobile = new MenuMobile(
  "[data-menu='button']",
  "[data-menu='list']",
  ['click', 'touchstart']
);
menuMobile.init();

initFuncionamento();
fetchAnimais('../animaisApi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
