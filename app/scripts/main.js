const gallery = document.querySelector('.gallery');
const modalWindow = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const modalClose = document.querySelector('.modal__close');

const random = (max) => Math.floor(Math.random() * max) + 1;

const generateHTML = ([h, v, i]) =>
    `<div class="gallery__item gallery__item_h_${h} gallery__item_w_${v}">
		<img class="gallery__image" src="img/gallery/travel300x300-${i}.jpeg" alt="travel image">
        <div class="overlay"></div>    
    </div>`

const createItems = () => {

    for (let i = 1; i <= 47; i++) {
        gallery.innerHTML += generateHTML([random(3), random(4), i]);
    }
    for (let i = 0; i < 15; i++) {
        gallery.innerHTML += generateHTML([1, 1, random(47)]);
    }
};

const handleClick = (e) => {
    const src = e.currentTarget.querySelector('.gallery__image').src;
    modalImage.src = src;
    modalWindow.classList.add('modal_open');
}

const close = () => {
    modalWindow.classList.remove('modal_open');
}


window.onload = function() {
    createItems();
    var galleryImages = document.querySelectorAll('.gallery__item');
    galleryImages.forEach(item => item.addEventListener('click', handleClick));
    modalClose.addEventListener('click', close);
}