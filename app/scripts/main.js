const gallery = document.querySelector('.gallery');

const random = (max) => Math.floor(Math.random() * max) + 1;

const generateHTML = ([h, v, i]) =>
    `<div class="gallery__item gallery__item_h_${h} gallery__item_w_${v}">
		<img class="gallery__image" src="img/gallery/travel300x300-${i}.jpeg" alt="travel image">
	</div>`

const createItems = () => {

    for (let i = 1; i <= 47; i++) {
        gallery.innerHTML += generateHTML([random(3), random(4), i]);
    }
    for (let i = 0; i < 15; i++) {
        gallery.innerHTML += generateHTML([1, 1, random(47)]);
    }
};


window.onload = function() {
    createItems();
}