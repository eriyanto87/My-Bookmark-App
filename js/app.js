import ui from './ui.js';
import api from './api.js';
import buttons from './buttons.js';

 function init() {
   api.getBookmarks()
   .then(()=>{
    ui.render()
    buttons.addButton();
    buttons.newButton();
    buttons.cancelButton();
   });
  }
  
  $(init);