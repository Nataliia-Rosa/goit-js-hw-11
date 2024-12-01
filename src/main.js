import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-function.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery a');

form.dataset.page = '1';
form.dataset.query = '';

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      position: 'bottomCenter',
      message: 'Please enter a search term!',
    });
    return;
  }

  form.dataset.query = query;
  form.dataset.page = '1';

  clearGallery(galleryContainer);

  toggleLoader(true);

  fetchImages(query, 1)
    .then(data => {
      toggleLoader(false);

      if (data.hits.length === 0) {
        iziToast.error({
          position: 'bottomCenter',
          message: `Sorry, there are no images matching </br> your search query. Please, try again!`,
        });
        form.elements.searchQuery.value = '';
        return;
      }

      const markup = renderGallery(data.hits);
      galleryContainer.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
    })
    .catch(error => {
      toggleLoader(false);
      iziToast.error({ title: 'Error', message: error.message });
    });

  form.elements.searchQuery.value = '';
});

function toggleLoader(show) {
  loader.style.display = show ? 'block' : 'none';
}
