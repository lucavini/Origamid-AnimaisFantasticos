import ScrollSuave from './modules/scroll-suave.js';
import initAnimationScroll from './modules/animacao-scroll.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import iniModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initmenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();

initAnimationScroll();
initAccordion();
initTabNav();
iniModal();
initTooltip();
initDropDownMenu();
initmenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
