'use strict';
// скролл вверх
const upScroll = () => {
    const upScrollBtn = document.querySelector('.up');
    const serviceSection = document.getElementById('services');



    const heightDocument = document.documentElement.clientHeight;
    const serveiceSectionHeight = document.documentElement.clientHeight;

    const scrollUpfunct = (element) => {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth',
        });
    }











    


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

};

export default upScroll;