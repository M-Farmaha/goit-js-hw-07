import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEL = document.querySelector(".gallery");
const GalleryImagesMarkup = createGalleryImagesMarkup(galleryItems);

galleryEL.insertAdjacentHTML("beforeend", GalleryImagesMarkup);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryImagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
    })
    .join("");
}
