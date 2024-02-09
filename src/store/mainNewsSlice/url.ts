const API = 'https://api.nytimes.com/svc/topstories/v2/';
const KEY = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';

export const url = {
  home: `${API}home.json?api-key=${KEY}`,
  sundayreview: `${API}sundayreview.json?api-key=${KEY}`,
  nyregion: `${API}nyregion.json?api-key=${KEY}`,
  books: `${API}books.json?api-key=${KEY}`,
};
