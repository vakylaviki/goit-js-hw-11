
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';


import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'Oops!',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
