import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import iniModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initmenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';
import initAnimationScroll from './modules/animacao-scroll.js';

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initTabNav();
iniModal();
initTooltip();
initDropDownMenu();
initmenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimationScroll();
