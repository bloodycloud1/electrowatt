'use strict';
// модальное окно
const toggleModalWindow = () => {
    const callbackBtns = document.querySelectorAll('.callback-btn');
    const modalBlock = document.querySelector('.modal-callback');
    const modalBlockCloseBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');

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

    overlay.addEventListener('click', () => {
        toggleModalWindowCallBack('close');
    });

    modalBlockCloseBtn.addEventListener('click', () => {
        toggleModalWindowCallBack('close');
    });
};

export default toggleModalWindow;