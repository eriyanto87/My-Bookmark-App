import store from './store.js';
const api = 'https://thinkful-list-api.herokuapp.com';
// Anytime you manipulate data in your API make sure to sync
// it with your  store. Always!
function addBookmark({ title, url, desc, rating }) {
  // check if desc exists
  // check if rating exists
  return fetch(`${api}/evi/bookmarks`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, url, desc, rating })
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));
}
function getBookmarks() {
  return fetch(`${api}/evi/bookmarks`)
    .then((response) => response.json())
    .then((data) => {
      store.bookmarks = data;
      return store.bookmarks;
    });
}
export default {
  addBookmark,
  getBookmarks
};
