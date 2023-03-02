import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join(' ');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
