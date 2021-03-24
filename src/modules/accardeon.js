'use strict';

const accardeon = () => {
    const accardeonSection = document.querySelector('.accordeon');
    const accardeonTitle = accardeonSection.querySelectorAll('.element');

    const toggleAccardeon = (index) => {
        for(let i = 0; i < accardeonTitle.length; i++) {
            const content = accardeonSection.querySelectorAll('.element-content');
            
            if(index === i) {
                accardeonTitle[i].classList.remove('active');
                content[i].style.display = 'block';
            } else {
                accardeonTitle[i].classList.add('active');
                content[i].style.display = 'none';
            }
        }
    };

    accardeonSection.addEventListener('click', function(event) {
        let target = event.target;
        // closest() проверяет у элемента селектор
        target = target.closest('.element');
        if(target) {
            accardeonTitle.forEach(function(item, i) {
                if(item === target) {
                    toggleAccardeon(i);
                }
            });
        }
    });
};

export default accardeon;