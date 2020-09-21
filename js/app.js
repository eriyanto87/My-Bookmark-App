import ui from './ui.js';
import api from './api.js';
import buttons from './buttons.js'

  async function main() {
    await api.getBookmarks();
    ui.render(ui.initialView);
    buttons.addButton(); 
    buttons.newButton(); 
    buttons.cancelButton();
  }
  
  $(main);