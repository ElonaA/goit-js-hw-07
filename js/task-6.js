const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.getAttribute('data-length');


inputRef.onblur = function () {
    // console.log(this.value.length);
    if (inputLength < this.value.length) {
        this.classList.remove('valid');
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
        this.classList.add('valid');
    }
};