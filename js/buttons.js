import render from './ui.js';
import api from './api.js';

//event listener
 function newButton() {
    $("main").on("click", "#new", (event) => {
      event.preventDefault();
      console.log("new button was clicked!");
      console.log(render.render)
      render.render(render.addBookmarkView);
    });
  }
  
  function cancelButton() {
    $("main").on("click", "#cancel", (event) => {
      event.preventDefault();
      console.log("cancel button was clicked!");
      render.render(render.initialView);
    });
  }
  
  function addButton() {
    $("main").on("click", "#add", (event) => {
      event.preventDefault();
      console.log("add button was clicked!");
      const title = $('main').find('#title').val(); 
      console.log(title);
      render.render(render.initialView);
      $('main').append(bookmarks());
    });
  }

  function bookmarks() {
    try {  
    api.getBookmarks().then(list => 
        console.log(list)
     /*   `
      <ul>
      ${list.map(x => bookmark(x))}
      </ul>
      `)}*/
    )}
      catch(e) {
          console.log(e.message);
      }
  }

  function bookmark(bookmark) {
      return `
      <li>${bookmark.title}</li>
      `
  }
  export default {
      addButton, 
      cancelButton, 
      newButton
  }