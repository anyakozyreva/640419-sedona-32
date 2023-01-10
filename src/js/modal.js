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

const inputWrappers = modal.querySelectorAll('[data-input-wrapper]');
inputWrappers.forEach((currentWrapper) => {
    const plusButton = currentWrapper.querySelector('[data-plus-btn]');
    const minusButton = currentWrapper.querySelector('[data-minus-btn]');
    const input = currentWrapper.querySelector('[data-input-number]');
    const step = input.step === '' ? MIN_STEP : Number(input.step);
    plusButton.addEventListener('click', () => {
        const sum = Number(input.value) + step;
        if (Number(input.value) < Number(input.max)) {
            input.value = sum <= Number(input.max) ? sum : input.max;
        }
    });

    minusButton.addEventListener('click', () => {
        const delta = Number(input.value) - step;
        if (Number(input.value) > Number(input.min)) {
            input.value = delta >= Number(input.min) ? delta : input.min;
        }
    });
});
