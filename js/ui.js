import api from './api.js';
import buttons from './buttons.js';
import store from './store.js';

function toggleAddBookmark() {
  return `
    <div id="x">
      <button id="new">New</button>
      <select id="filter" placeholder="Filter By" tabindex="1">
           <option value="">Filter By</option>
           <option value="1">1+ star</option>
           <option value="2">2+ stars</option>
           <option value="3">3+ stars</option>
           <option value="4">4+ stars</option>
           <option value="5">5 stars</option>
      </select>
      </div>
      `;
}

function addBookmarkView() {
  return `
    <form class="add-bookmark-form">
      <h3>Add Bookmark</h3>
      <p>
        <label>Title:</label>
        <input id="title" type="text" placeholder="title">
      </p>
      <p>
      <label>URL Link:</label>
      <input id="url" type="url" placeholder="url link">
      </p>
      <p>
      <label>Description:</label> 
      <input id="desc" type="text-area" placeholder="description">
      </p>
      <p>
      <label>Rating:</label>
      <select id="rating" name="rating">  
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5(best)</option>
      </select>
      </p>
      <p>
      <button type="reset" id="cancel">Cancel</button>
      <button type="submit">Add</button>
      </p>
    </form>
    `;
}

 function bookmarks() {
  return `<ul id="bookmarks">${store.bookmarks
    .map(
      (x) => 
        `
        <div class="bookmarks">
        <li id=${x.id}>
        <p>
        Name: ${x.title} 
        </p>
        <p> 
        Rating: ${x.rating}
        </p>
        <div class="bookmark-info hidden">
        ${x.desc}-<a href='${x.url}' target="_blank">Click Here To Visit Site</a> 
        </div>
        <button id="more-info">More/Less Info</button>  
        <button id="delete">Delete</button>
        </li> 
        </div>
        `
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

    $('main').html(`
      ${header()}
      ${toggleAddBookmark()}
      <h3>My Bookmarks</h3>
      ${bookmarks()}
    `);
}

export default {
  addBookmarkView,
  bookmarks,
  render,
  toggleAddBookmark
};