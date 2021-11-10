// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener('load', (e) => {
  document.querySelector('.page-header__logo').classList.add('page-header__logo--load');
  document.querySelector('.page-header__nav').classList.add('page-header__nav--load');
  document.querySelector('body').classList.add('loading');
  document.querySelector('.screen__footer').classList.add('screen__footer--load');
})