const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', handleInputRange);


function handleInputRange(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}