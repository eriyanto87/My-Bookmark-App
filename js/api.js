import store from './store.js';
const api = "https://thinkful-list-api.herokuapp.com";

// Anytime you manipulate data in your API make sure to sync it with your  store.

function addBookmark({ title, url, desc, rating }) {
    // check if desc exists
    // check if rating exists
    try {
      fetch(`${api}/evi/bookmarks`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, url, desc, rating })
      })
        .then((response) => response)
        .then((data) => console.log(data.json()));
    } catch (e) {
      console.log(e.message);
    }
  }
  
  async function getBookmarks() {
    try {
      const res = await fetch(`${api}/evi/bookmarks`)
      console.log(res)
      store.bookmarks = await res.json();
      return store.bookmarks;
    } catch (e) {
      console.log(e.message);
    }
  }  

export default {
    addBookmark, 
    getBookmarks
}