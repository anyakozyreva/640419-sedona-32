import { sendData } from './api.js';
const modalSuccess = document.getElementById('success');
const buttonSuccess = modalSuccess.querySelector('.success__button');

const toggleVisibility = () => {
    modalSuccess.classList.toggle('modal-close');
};

buttonSuccess.addEventListener('click', toggleVisibility);

const handleSuccess = () => {
    toggleVisibility();
};

const handleFail = () => {
    console.log('DEAAAAD');
};

export const handleSubscriptionSubmit = (evt) => {
    const body = new FormData(evt.target);
    evt.preventDefault();
    sendData(handleSuccess, handleFail, body);
};
