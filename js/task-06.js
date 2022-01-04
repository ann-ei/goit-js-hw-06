const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputLength);

function onInputLength() {
    if(inputEl.dataset.length === 6) {
        inputEl.classList.add('valid');
    }
    inputEl.classList.add('invalid');
}