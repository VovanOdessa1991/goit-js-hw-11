import { render, clearCiild } from './js/render-functions';
import { getAllBooks } from './js/pixabay-api';
import { refs } from './js/refs';

import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

hideLoader();

refs.formIMG.addEventListener('submit', seartchIMG);
let gallery = new SimpleLightbox('.galery__item-div a');

function seartchIMG(e) {
  e.preventDefault();
  const nameIMG = e.target.name.value.trim();
  if (nameIMG === '') {
    clearCiild(refs.galery);
    iziToast.info({
      title: 'Пустой РЯДОК!!',
    });
    return;
  }

  showLoader();
  getAllBooks(nameIMG).then(img => {
    if (img.hits.length == 0) {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      clearCiild(refs.galery);
      return;
    }

    clearCiild(refs.galery);

    // Old method
    // img.hits.forEach(element => {
    //   print(
    //     refs.galery,
    //     element.webformatURL,
    //     element.likes,
    //     element.views,
    //     element.comments,
    //     element.downloads
    //   );
    // });
    render(img.hits);
    gallery.refresh();
    loaderVision();
  });
  e.target.name.value = '';
}
function loaderVision() {
  const mediaFiles = document.querySelectorAll('img, video');
  let i = 0;

  Array.from(mediaFiles).forEach(file => {
    file.onload = () => {
      i++;

      if (i === mediaFiles.length - 2) {
        hideLoader();
      }
    };
  });
}

function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.preLoader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.preLoader.classList.add('hidden');
}
