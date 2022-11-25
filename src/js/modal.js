const modal = document.getElementById('search-modal');
const searchButton = document.getElementById('search-button');
const closeButton = modal.querySelector('.btn--modal-close-btn');

const toggleVisibility = () => {
    modal.classList.toggle('modal-close');
};

searchButton.addEventListener('click', toggleVisibility);
closeButton.addEventListener('click', toggleVisibility);

// const adultWrapper = document.getElementById('adult-wrapper');
// const plusButton = adultWrapper.querySelector('.btn--plus-btn');
// const minusButton = adultWrapper.querySelector('.btn--minus-btn');
// const adultInput = adultWrapper.querySelector('.auth-input--number');
//
// plusButton.addEventListener('click', () => {
//     if (Number(adultInput.value) < 100) {
//         adultInput.value = Number(adultInput.value) + 1;
//     }
// });
//
// minusButton.addEventListener('click', () => {
//     if (Number(adultInput.value) > 1) {
//         adultInput.value = Number(adultInput.value) - 1;
//     }
// });

const childrenWrapper = document.getElementById('children-wrapper');
// const plusButton = childrenWrapper.querySelector('.btn--plus-btn');
// const minusButton = childrenWrapper.querySelector('.btn--minus-btn');
// const childrenInput = childrenWrapper.querySelector('.auth-input--number');
//
// plusButton.addEventListener('click', () => {
//     if (Number(childrenInput.value) < 100) {
//         childrenInput.value = Number(childrenInput.value) + 1;
//     }
// });
//
// minusButton.addEventListener('click', () => {
//     if (Number(childrenInput.value) > 1) {
//         childrenInput.value = Number(childrenInput.value) - 1;
//     }
// });
const MIN_STEP = 1;

const inputWrappers = modal.querySelectorAll('.auth-control-btn-wrapper');
inputWrappers.forEach((currentWrapper) => {
    const plusButton = currentWrapper.querySelector('.btn--plus-btn');
    const minusButton = currentWrapper.querySelector('.btn--minus-btn');
    const input = currentWrapper.querySelector('.auth-input--number');
    const step = input.step === '' ? MIN_STEP : Number(input.step);

    plusButton.addEventListener('click', () => {
        if (Number(input.value) < Number(input.max)) {
            input.value = Number(input.value) + step;
        }
    });

    minusButton.addEventListener('click', () => {
        if (Number(input.value) > Number(input.min)) {
            input.value = Number(input.value) - step;
        }
    });
});
