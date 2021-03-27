'use strict';

const menuScroll = () => {
    const topMenu  = document.querySelector('.top-menu');
    const servicePriceLink = topMenu.querySelectorAll('a')[0];
    const faqLink = topMenu.querySelectorAll('a')[1];
    const contactsLink =  topMenu.querySelectorAll('a')[2];

    const serviceSection = document.getElementById('services');
    const faqSection = document.getElementById('faq');
    const contactsSection = document.getElementById('contacts');

    function scrollToSection(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth',
        });

    }
    
    servicePriceLink.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(serviceSection);
    });
    faqLink.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(faqSection);
    });
    contactsLink.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(contactsSection);
    });
};

export default menuScroll;