const API_KEY = '47394057-a123a8d6d5d39dc35fe9d8ef3';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1, perPage = 12) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  });

  const url = `${BASE_URL}?${params.toString()}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images. Please try again later');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => console.log(error.message));
}
