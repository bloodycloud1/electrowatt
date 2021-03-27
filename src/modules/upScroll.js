'use strict';
// скролл вверх
const upScroll = () => {
    const upScrollBtn = document.querySelector('.up');
    const serviceSection = document.getElementById('services');

    let scrolled;
    let timer;
    let speedScroll = 40;

    upScrollBtn.style.display = 'none';

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset;

        if(scrollTop >= serviceSection.offsetTop) {
            upScrollBtn.style.display = 'block';
        } else {
            upScrollBtn.style.display = 'none';
        }

    });

    const scrollToTop = () => {
        if(scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - speedScroll; // скорость прокрутки
            timer = setTimeout(() => {
                scrollToTop();
            });
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    };

    upScrollBtn.addEventListener('click', ()  => {
        console.log(window.pageYOffset);
        scrolled = window.pageYOffset;
        // window.scrollTo(0, 0);
        scrollToTop();
    });
};

export default upScroll;