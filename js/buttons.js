import ui from './ui.js';
import api from './api.js';
import store from './store.js';

// you want to change where you render your ui bookmark view
// you don't want to rerender the DOM after you click on
// `new` because if you do that then the whole dom will rerender
// even though you didn't change the data.
function newButton() {
    $('main').on('click', '#new', (event) => {
      event.preventDefault();
      // no need to rerender the whole dom when you
      // click the new button. You're simply manipulating the DOM
      // not the store.
      return $('#x').append(ui.addBookmarkView());
    });
  }


function cancelButton() {
  $('main').on('click', '#cancel', (event) => {
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

    console.log(title, url, desc, rating);
    // Always good to have multiple validations.
    if (!title || title.trim() === '') {
      // handle a better way to display an error this just prevents
      // the rest of the function from running
      alert('Missing Title');
      return false;
    }

    if (!url || url.trim() === ''|| url === undefined) {
      // handle a better way to display an error this just prevents
      // the rest of the function from running
      alert('Missing url');
      return false;
    }
    //console.log(title, url, desc, rating)
    return api
      .addBookmark({ title, url, desc, rating })
      .then(() => ui.render())
      .catch((err) => {
        store.setError(err.message);
      renderError()
      })
  });
}

function deleteButton() {
 $('main').on('click', '#delete', (event) => {
     console.log('delete button clicked'); 

    let id = $(event.target).parent().attr('id')
    console.log(id)

     return api
     .deleteBookmarks(id)
     .then(() => ui.render())
     .catch((err) =>  {
       store.setError(err.message);
     renderError()
     })
})
}

function moreInfo() {
    $('li').on('click', '#more-info', (event) => {
        console.log('more info button was clicked!'); 
        let id = $(event.target).parent().attr('id'); 
        let target = $('main').find(`li[id=${id}]`).find('.bookmark-info');
        console.log(id, target);
        $(target).toggleClass('hidden');

    })
}

export default {
  addButton,
  cancelButton,
  newButton, 
  deleteButton,
  moreInfo
};  
