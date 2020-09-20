import api from './api.js';
import buttons from './buttons.js';
import ui from './ui.js';

  
  function main() {
    //api.getBookmarks();
    buttons.addButton(); 
    buttons.newButton(); 
    buttons.cancelButton();
    ui.render(ui.initialView);
  }
  
  $(main);