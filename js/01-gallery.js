import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

refs.gallery.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
    )
    .join(' ');
}

function onGalleryItemClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const source = evt.target.dataset.source;

  openCloseModal(source);
}

function openCloseModal(source) {
  const modalWindow = basicLightbox.create(
    `
   <img width="1400" height="900" src="${source}">
`
  );

  modalWindow.show();
  document.addEventListener('keydown', onButtonEsc);

  function onButtonEsc(event) {
    if (event.code === 'Escape') {
      modalWindow.close();
      document.removeEventListener('keydown', onButtonEsc);
    }
  }
}

// console.log(galleryItems);
