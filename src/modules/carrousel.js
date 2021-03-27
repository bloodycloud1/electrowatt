'use strict';

const carrousel = () => {
    const carrouselMain = document.querySelector('.services-elements');
    const slides = document.querySelector('.services-carousel').children;

    const getScreeWidth = () => {
        let widthWindow = window.screen.width;
        let result;
        if (widthWindow < 768) {
            result = 1;
            return result;
        } else if (widthWindow < 992)  {
            result = 2;
            return result;
        } 
        else if (widthWindow < 1280) {
            result = 3;
            return result;
        }
        else if (widthWindow < 2560) {
            result = 3;
            return result;
        }
        return result;
    };

    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.add('slider-item');
    }

    const modalBlock = document.querySelector('.modal-callback');
    const overlay = document.querySelector('.modal-overlay');
    carrouselMain.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
    
        if(target.tagName === 'A') {
            modalBlock.style.display = 'block';
            overlay.style.display = 'block';
        }
    });

    for (let item of slides) {
        item.classList.add('slider-item');
    }

    class SliderCarrousel {
        constructor({
            main, 
            wrap, 
            next, 
            prev, 
            position = 0, 
            slidesToShow,
        }) {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.options = {
                position,
            };
            this.slidesToShow = slidesToShow;

        }

        addClass() {
            this.main.classList.add('slider-main');
            this.wrap.classList.add('slider-wrap');

            for (let item of this.slides) {
                item.classList.add('slider-item');
            }
        }

        addStyle() {
            const style = document.createElement('style');
            style.id = 'sliderCarrousel-style';

            style.textContent = `
                .slider-main {
                    overflow: hidden !important;
                }
                .slider-wrap {
                    display: flex !important;
                    transition: transform 0.5s !important;
                    justify-content: space-between !important;
                }
                .slider-item {
                    display: flex !important;
                    margin: auto 0 !important;
                    justify-content: space-between !important;
                }
            `;
            document.head.appendChild(style);
        }

        controlCarrousel() {
            this.prev.addEventListener('click', this.prevSlide.bind(this));
            this.next.addEventListener('click', this.nextSlide.bind(this));
        }

        prevSlide() {
            if(this.options.position > 0) {
                if(getScreeWidth() === 1) {
                    --this.options.position;
                    this.wrap.style.transform = `translateX(-${this.options.position * 100}%)`;
                }

                else if(getScreeWidth() === 2) {
                    --this.options.position;
                    this.wrap.style.transform = `translateX(-${this.options.position * 50}%)`;
                } 
                else if (getScreeWidth() === 3) {
                    --this.options.position;
                    this.wrap.style.transform = `translateX(-${this.options.position * 33}%)`;
                }
            }
        }

        nextSlide() {
            // EDIT this.options.position < this.slides.length - this.slidesToShow
            if(this.options.position < this.slides.length - 1) {
                if(getScreeWidth() === 1) {
                    ++this.options.position;
                    this.wrap.style.transform = `translateX(-${this.options.position * 100}%)`;
                }

                else if(getScreeWidth() === 2) {
                    ++this.options.position;
                    this.wrap.style.transform = `translateX(-${this.options.position * 50}%)`;
                } 
                else if (getScreeWidth() === 3) {
                    ++this.options.position;
                    this.wrap.style.transform = `translateX(-${this.options.position * 33}%)`;
                }
            }
        }
        
        init() {
            this.addClass();
            this.addStyle();
            this.controlCarrousel();
        }
    }

    let num = getScreeWidth();
    
    const newCarousel = new SliderCarrousel({
        main: '.services-elements',
        wrap: '.services-carousel',
        next: '.arrow-right',
        prev: '.arrow-left',
        position: 0,
        slidesToShow: num
    });

    newCarousel.init();
};

export default carrousel;