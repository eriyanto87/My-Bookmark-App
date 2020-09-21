import ui from './ui.js';
import api from './api.js';

  async function main() {
    await api.getBookmarks();
    ui.render(ui.initialView);
  }
  
  $(main);