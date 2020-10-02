// Посчет и вывод в консоль количества категорий в списке ul#categories
const ulSelectedById = document.querySelector('#categories').children.length;

console.log(`В списке ${ulSelectedById} категории.`);

// Вывод в консоль заголовка и кол-ва элементов li.item
//Вариант 1
const liSelectedByClass = document.querySelectorAll('.item');
const liItemEl = liSelectedByClass[2];

const getLiEl = function (element) {
    let liItemCategory = element.firstElementChild.textContent;
    let liNumberCategory = element.lastElementChild.children.length;
    return `Категория: ${liItemCategory} \nКоличество элементов: ${liNumberCategory} `;
}

console.log(getLiEl(liItemEl));

// Вариант 2
const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title}  \nКоличество элементов: ${itemsLength}`);
});