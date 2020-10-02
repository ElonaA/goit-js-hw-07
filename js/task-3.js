const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryEl = document.querySelector('#gallery');
console.log(galleryEl);

// //Создаем галлерею изображений по массиву данных

/*
// Вариант 1 (Тренируем ручки)
const liItemEl1 = document.createElement('li');
liItemEl1.classList.add('gallery__container');

const imageEl1 = document.createElement('img');
imageEl1.classList.add('gallery__img');
imageEl1.src =
    'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl1.alt = 'valais-and-mountains-glacier';


const liItemEl2 = document.createElement('li');
liItemEl2.classList.add('gallery__container');

const imageEl2 = document.createElement('img');
imageEl2.classList.add('gallery__img');
imageEl2.src =
    'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';


const liItemEl3 = document.createElement('li');
liItemEl3.classList.add('gallery__container');

const imageEl3 = document.createElement('img');
imageEl3.classList.add('gallery__img');
imageEl3.src =
    'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl3.alt = 'Group of Horses Running';


liItemEl1.appendChild(imageEl1);
liItemEl2.appendChild(imageEl2);
liItemEl3.appendChild(imageEl3);

galleryEl.append(liItemEl1, liItemEl2, liItemEl3);
*/

//Вариант 2 (Ручки ооочень устали ;( => делаем динамику)

for (let el of images) {
    galleryEl.insertAdjacentHTML('beforeEnd', `<li class='gallery__container'><img class='gallery__img' src="${el.url}" alt="${el.alt}"></li>`);
};