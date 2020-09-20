import buttons from './buttons.js';
import render from './ui.js';
  
  function main() {
    buttons.addButton(); 
    buttons.newButton(); 
    buttons.cancelButton();
    render.render(render.initialView);
  }
  
  $(main);