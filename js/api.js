import store from './store.js';
const api = 'https://thinkful-list-api.herokuapp.com';
// Anytime you manipulate data in your API make sure to sync
// it with your  store. Always!

function addBookmark(bookmark) {
  return fetch(`${api}/evi/bookmarks`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookmark)
  })
    .then((response) => response.json())
   .then(newBookmark => store.bookmarks = [...store.bookmarks,newBookmark])
}

function getBookmarks() {
  return fetch(`${api}/evi/bookmarks`)
    .then((response) => response.json())
    .then((data) => {
      store.bookmarks = data;
      return store.bookmarks;
      console.log(store.bookmarks)
    });
}

function deleteBookmarks(id) {
  return fetch(`${api}/evi/bookmarks/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => store.bookmarks = store.bookmarks.filter(bookmark=>bookmark.id!==id))
}

export default {
  addBookmark,
  getBookmarks, 
  deleteBookmarks
}
