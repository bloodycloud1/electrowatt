'use strict';
// модальное окно
const toggleModalWindow = () => {
    const callbackBtns = document.querySelectorAll('.callback-btn');
    const modalBlock = document.querySelector('.modal-callback');
    const modalBlockCloseBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');
    const buttonService = document.querySelector('.button-services');
    // функция toggle для открытия (закртыия) модального окна
    const toggleModalWindowCallBack = (toggle) => {
        if(toggle === 'open') {
            modalBlock.style.display = 'block';
            overlay.style.display = 'block';
        } else if(toggle === 'close') {
            modalBlock.style.display = 'none';
            overlay.style.display = 'none';
        }
    };
    
    callbackBtns.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if(e.target.tagName === 'A') {
                toggleModalWindowCallBack('open');
            }
        });
    });
    // кнопка Не нашли нужной услуги?
    buttonService.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModalWindowCallBack('open');
    });
    // оверлей
    overlay.addEventListener('click', () => {
        toggleModalWindowCallBack('close');
    });
    // кнопка закрытие модального окна (крестик)
    modalBlockCloseBtn.addEventListener('click', () => {
        toggleModalWindowCallBack('close');
    });
};

export default toggleModalWindow;