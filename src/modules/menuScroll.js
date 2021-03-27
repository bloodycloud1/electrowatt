'use strict';

const menuScroll = () => {
    const topMenu  = document.querySelector('.top-menu');
    const servicePriceLink = topMenu.querySelectorAll('a')[0];
    const faqLink = topMenu.querySelectorAll('a')[1];
    const contactsLink =  topMenu.querySelectorAll('a')[2];

    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuBtn = document.querySelector('.mob-menu-btn');
    const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.modal-overlay');
    
    const serviceSection = document.getElementById('services');
    const faqSection = document.getElementById('faq');
    const contactsSection = document.getElementById('contacts');

    const scrollToSection = (element) => {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth',
        });
    };

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.style.right = '0px';
        overlay.style.display = 'block';
    });

    mobileMenuCloseBtn.addEventListener('click', () => {
        mobileMenu.style.right = '-400px';
        overlay.style.display = 'none';
    });

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