import ui from './ui.js';
import api from './api.js';

//event listener
 function newButton() {
    $("main").on("click", "#new", (event) => {
      event.preventDefault();
      console.log("new button was clicked!");
      console.log(ui.render)
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
      console.log(title);
      ui.render(ui.initialView);
    });
  }


  export default {
      addButton, 
      cancelButton, 
      newButton
  }