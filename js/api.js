import store from './store.js';
const api = "https://thinkful-list-api.herokuapp.com";

function addBookmark({title, url, desc, rating}) {
    try {
    fetch(`${api}/evi/bookmarks`, {
        method: 'POST', 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, url, desc, rating })
    })
    .then(response => response)
    .then(data => console.log(data.json()))
    }
    catch(e) {
        console.log(e.message);
    }
}

function getBookmarks() {
    try {
    fetch(`${api}/evi/bookmarks`)
    .then(response => response)
    .then(data => data.json())
    }
    catch(e) {
        console.log(e.message);
    }
}

export default {
    addBookmark, 
    getBookmarks
}