const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulListEl = document.querySelector('#ingredients');

// //Создаем элемент списка li, заполняя значением из массива

/* Вариант 1 (Тренируем ручки)
const liItemEl = document.createElement('li');
liItemEl.textContent = ingredients[0];

const liItemEl2 = document.createElement('li');
liItemEl2.textContent = ingredients[1];

const liItemEl3 = document.createElement('li');
liItemEl3.textContent = ingredients[2];

const liItemEl4 = document.createElement('li');
liItemEl4.textContent = ingredients[3];

const liItemEl5 = document.createElement('li');
liItemEl5.textContent = ingredients[4];

const liItemEl6 = document.createElement('li');
liItemEl6.textContent = ingredients[5];

ulListEl.append(liItemEl, liItemEl2, liItemEl3, liItemEl4, liItemEl5, liItemEl6);
*/

//Вариант 2 (Ручки устали ;( => создаем функцию)

const makeListEl = ingredients.map(ingredient => {
    const liElList = document.createElement('li');
    liElList.textContent = ingredient;
    return liElList;
});

ulListEl.append(...makeListEl);
console.log(ulListEl);