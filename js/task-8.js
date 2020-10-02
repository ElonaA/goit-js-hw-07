const boxesRef = document.querySelector('#boxes');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy" ]');
const controlsRef = document.querySelector("#controls input");

renderRef.addEventListener('click', getAmount);
destroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    boxesRef.innerHTML = "";
}

function getAmount(amount) {
    amount = +document.querySelector("#controls input").value;
    createBoxes(amount);
}

function createBoxes(amount) {
    let basicSize = 30;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        let size = basicSize + i * 10;
        let div = document.createElement('div');
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);
    }
    boxesRef.appendChild(fragment);
}

function random() {
    return Math.floor(Math.random() * 256);
}