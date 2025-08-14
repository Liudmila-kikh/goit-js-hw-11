import axios from 'axios';

export function getImagesByQuery(query) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const API_KEY = '51783155-d60e9242c7f61df87da62484d';

    const params = new URLSearchParams({
        q: query,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    const url = `${BASE_URL}${END_POINT}`;

    return axios
        .get(url, { params })
        .then(response => response.data)
        .catch(error => {
            console.error('Помилка при отриманні зображень:', error.message);
            throw error;
        });
}