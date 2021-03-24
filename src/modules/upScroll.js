'use strict';
// скролл вверх
const upScroll = () => {
    const upScrollBtn = document.querySelector('.up');
    

    // console.log(upScrollBtn);
    const serveiceSection = document.querySelector('.services-section');

    upScrollBtn.style.display = 'none';

    const heightDocument = document.documentElement.clientHeight;
    const serveiceSectionHeight = document.documentElement.clientHeight;




    // console.log('offset', serveiceSection.offsetHeight);
    // console.log('top', serveiceSection.clientTop);
    // console.log('clientHeight', serveiceSection.clientHeight);
    // console.log('scrollHeight', serveiceSection.scrollHeight);
    // scrollHeight
    // console.log(document.documentElement.clientHeight);

    if(serveiceSectionHeight >= heightDocument) {
        upScrollBtn.style.display = 'block';
    }

    // console.dir(serveiceSection.clientHeight);
    // console.dir(serveiceSection);

    const upScrollFunc = () => {

    };

    upScrollBtn.addEventListener('click', () => {upScrollFunc();});

};

export default upScroll;