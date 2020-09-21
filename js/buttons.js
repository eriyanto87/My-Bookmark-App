import ui from './ui.js';
import api from './api.js';
import store from './store.js';

//event listener
 function newButton() {
    $("main").on("click", "#new", (event) => {
      event.preventDefault();
      console.log("new button was clicked!");
      ui.render(ui.addBookmarkView);
    });
  }
  
  function cancelButton() {
    $("main").on("click", "#cancel", (event) => {
      event.preventDefault();
      console.log("cancel button was clicked!");
      ui.render(ui.initialView);
    });
  }
  
  function addButton() {
    $("main").on("click", "#add", (event) => {
      event.preventDefault();
      console.log("add button was clicked!");
      const title = $('main').find('#title').val(); 
      const url = $('main').find('#url').val();
      const desc = $('main').find('#desc').val();
      const rating = $('main').find('#rating').val(); 
      console.log(title, url, desc, rating);
      store.bookmarks.push({title:title, url: url, desc: desc, rating: rating})
      console.log(store.bookmarks); 
      $('main').append(store.bookmarks); 
      ui.render(ui.initialView);
    })
  }


  export default {
      addButton, 
      cancelButton, 
      newButton
  }