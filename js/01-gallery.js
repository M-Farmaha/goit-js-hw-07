import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEL = document.querySelector(".gallery");
const GalleryImagesMarkup = createGalleryImagesMarkup(galleryItems);

galleryEL.insertAdjacentHTML("beforeend", GalleryImagesMarkup);

galleryEL.addEventListener("click", handleImageClick);

function handleImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);

  instance.show();

  document.addEventListener("keydown", closeModalByEscBtn);

  function closeModalByEscBtn(event) {
    if (!instance.visible()) {
      document.removeEventListener("keydown", closeModalByEscBtn);
      return;
    }
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModalByEscBtn);
    }
  }
}

function createGalleryImagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
