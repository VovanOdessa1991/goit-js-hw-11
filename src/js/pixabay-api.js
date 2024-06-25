//pixabay.com/api/

// key=44446882-f589529ab68d1d31e6487214d;

// ! ПРимер! Извлечение фотографий «желтых цветов». Поисковый запросддолжен быть закодирован в URL:

// https://pixabay.com/api/?key=44446882-f589529ab68d1d31e6487214d&q=yellow+flowers&image_type=photo

const BASE_URL = 'https://pixabay.com/api/';
const USERkEY = '?key=44446882-f589529ab68d1d31e6487214d';

export function getAllBooks(param) {
  const END_POINT = `&q=${param}&min_width=2450`;
  const params = '&image_type=photo&orientation=horizontal&safesearch=true';

  const url = `${BASE_URL}${USERkEY}${END_POINT}${params}`;

  const headers = {};
  // const ppc =
  //   'https://pixabay.com/api/?key=44446882-f589529ab68d1d31e6487214d&q=yellow+flowers&image_type=photo&pretty=true';
  const promiseIMG = fetch(url);

  return promiseIMG
    .then(data => data.json())

    .catch(() => {
      console.log('Error');
    });
  console.log(url);
  // return fetch(url).then(res => res.json());
}
