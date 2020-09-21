import ui from './ui.js';

  async function main() {
    await ui.render(ui.initialView);
  }
  
  $(main);