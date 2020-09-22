import api from './api.js';
import buttons from './buttons.js';
import store from './store.js';

function toggleAddBookmark() {
  return `
      <button id="new">New</button>
      <select id="filter" placeholder="Filter By" tabindex="1">
           <option value="">Filter By</option>
           <option value="1">1+ star</option>
           <option value="2">2+ stars</option>
           <option value="3">3+ stars</option>
           <option value="4">4+ stars</option>
           <option value="5">5 stars</option>
      </select>
      `;
}

function addBookmarkView() {
  // you want to convert this to a form for accessibility reasons and
  // because it's semantic
  return `
    <div class="add-bookmark-form">
      <div>
      <label>Title:</label>
      <input id="title" type="text" placeholder="title">
      </div>
      <div>
      <label>URL Link:</label>
      <input id="url" type="text" placeholder="url link">
      </div>
      <div>
      <label>Description:</label> 
      <input id="desc" type="text-area" placeholder="description">
      </div>
      <div>
      <label>Rating:</label>
      <select id="rating" name="rating">  
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5(best)</option>
      </select>
      </div>
      <div>
      <button id="cancel">Cancel</button>
      <button id="add">Add</button>
      </div>
    </div>
    `;
}

function bookmarks() {
  return `<ul>${store.bookmarks
    .map(
      (x) =>
        `<li data-bookmark-id=${x.id}>${x.title}-${x.rating}-${x.desc}-${x.url}</li> <button id="delete">Delete</button>`
    )
    .join('')}</ul>
        `;
}

function header() {
  return `
    <h1>My Bookmark App</h1>
    `;
}

function render() {
  // Your application relies on the data from the API to load
  // So you want to load that data each time when you render
  // Before doing anything else and then do it again after you
  // add, delete or edit a bookmark so this automatically should
  // do that and you just call render() each time.
  api.getBookmarks().then(() => {
    $('main').html(`
      ${header()}
      ${toggleAddBookmark()}
      ${bookmarks()}
    `);
    buttons.addButton();
    buttons.newButton();
    buttons.cancelButton();
  });
}

export default {
  addBookmarkView,
  bookmarks,
  render,
  toggleAddBookmark
};