'use strict';
import toggleModalWindow from './modules/toggleModalWindow';
import topSlider from './modules/slider';
import upScroll from './modules/upScroll';
import sendFormModal from  './modules/sendFormModal';
import accardeon from './modules/accardeon';
import menuScroll from './modules/menuScroll';

const App = () => {
    menuScroll();
    // модальное окно
    toggleModalWindow();
    // отправка формы
    sendFormModal();
    // аккардеон в секции ЧАВО 
    accardeon();
    // скролл вверх
    upScroll();
    // топ слайдер
    topSlider();
};

App();