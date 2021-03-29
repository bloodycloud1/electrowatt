'use strict';

const sendFormModal = () => {
    const formModalCallback = document.querySelector('form[name="form-callback"]');
    const nameInput = formModalCallback.querySelector('input[name="fio"]');
    const phoneInput = formModalCallback.querySelector('input[name="tel"]');

    // проверка и обрезание пробелов
    const checkFormSpace = (event) => {
        event.target.value = event.target.value.replace(/-+/gi, ' ').trim(); // убирем множество тире
		event.target.value = event.target.value.replace(/\s+/gi, ' ').trim(); // убираем пробелы
    };
    // валадиция формы с именем
    nameInput.addEventListener('input', (event) => {
        let target = event.target;
        target.value = target.value.replace(/[^А-яа-яЁё-\s]/gi, '');
        target.addEventListener('focusout', checkFormSpace);
    });
    // валадиция формы с телефоном
    phoneInput.addEventListener('input', (event) => {
        let target = event.target;
        target.value = target.value.replace(/[^0-9\+]/g, '');
        target.addEventListener('focusout,', checkFormSpace);
    });

    const send = () => {
        // отправка формы
        const errorMessage = 'Что то пошло не так...';
        const loadMessage = 'Загрузка...';
        const successMessage = 'Спасибо! Мы скоро с вами свяжемся';
        const statusMessage = document.createElement('div');
        // модальное окно
        const modalBlock = document.querySelector('.modal-callback');
        const overlay = document.querySelector('.modal-overlay');

        statusMessage.style.cssText = `
            font-size: 2rem;
            color: black; 
        `;

        function clearInputs() {
			let allFormInputs = formModalCallback.querySelectorAll('input');
			allFormInputs.forEach(function(item) {
				item.value = '';
			});
		}

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            });
        };
        
        const formPostData = (event, form) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);
            let body = {};

            formData.forEach((value, key) => {
                body[key] = value;
            });

            clearInputs();
            
            postData(body)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network not 200.');
                    }
                    statusMessage.style.cssText = `
                        color: green;
                    `;
                    statusMessage.textContent = successMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                        modalBlock.style.display = 'none';
                        overlay.style.display = 'none';
                    }, 5000);
                
                })
                .catch((error) => {
                    statusMessage.style.cssText = `
                        color: red;
                    `;
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        };
        
        // событие отправки формы
        formModalCallback.addEventListener('submit', (event) => {
            event.preventDefault();
            formModalCallback.appendChild(statusMessage);
            let allFormInputs = formModalCallback.querySelectorAll('input');

            if(allFormInputs[0].value.length < 2 || allFormInputs[1].value.length < 8 ||
                allFormInputs[1].value.length > 12) {
                    statusMessage.style.cssText = `
                        font-size: 2rem;
                        color: red;
                    `;
                    statusMessage.textContent = 'Введите корректные данные!!!';
            } else {
                formPostData(event, formModalCallback);
            }
        });
    };
    send();
};

export default sendFormModal;