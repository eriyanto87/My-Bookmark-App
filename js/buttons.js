import render from './ui.js'

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
      $("main").append($("#title").val());
    });
  }


  export default {
      addButton, 
      cancelButton, 
      newButton
  }