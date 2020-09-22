import ui from './ui.js';
import api from './api.js';

// you want to change where you render your ui bookmark view
// you don't want to rerender the DOM after you click on
// `new` because if you do that then the whole dom will rerender
// even though you didn't change the data.
function newButton() {
    $('#new').on('click', (event) => {
      event.preventDefault();
      // no need to rerender the whole dom when you
      // click the new button. You're simply manipulating the DOM
      // not the store.
      return $('main').prepend(ui.addBookmarkView());
    });
  }


function cancelButton() {
  $('main').on('click', '#cancel', (event) => {
    
    // no need to rerender the whole dom when you
    // click the cancel button. Only rerender when
    // the storechanges.
    return $('.add-bookmark-form').remove();
  });
}

function addButton() {
  $('main').on('submit', '.add-bookmark-form', (event) => {
    event.preventDefault();
    console.log('add button was clicked!');
    let title = $('main').find('#title').val();
    let url = $('main').find('#url').val();
    let desc = $('main').find('#desc').val();
    let rating = $('main').find('#rating').val();

    // Always good to have multiple validations.
    if (!title || title.trim() === '') {
      // handle a better way to display an error this just prevents
      // the rest of the function from running
      alert('Missing Title');
      return false;
    }

    if (!url || url.trim() === '') {
      // handle a better way to display an error this just prevents
      // the rest of the function from running
      alert('Missing url');
      return false;
    }
    //console.log(title, url, desc, rating)
    return api
      .addBookmark({ title, url, desc, rating })
      .then(() => ui.render())
      .catch((err) => console.log(err));
  });
}

export default {
  addButton,
  cancelButton,
  newButton
};  