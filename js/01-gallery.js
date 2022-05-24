'use strict';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function addItem() {
    return galleryItems.map(items => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${items.original}">
    <img
        class="gallery__image"
        src="${items.preview}"
        data-source="${items.original}"
        alt="${items.description}"
    />
    </a>
</div>`
    )
    .join('')
}

gallery.insertAdjacentHTML('afterbegin', addItem(galleryItems))

console.log(galleryItems);

let instance;

gallery.addEventListener("click", galleryClick);

function galleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);

    instance.show();
  
}
