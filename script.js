//html template
//view
function initialView() {
    return `
    <button id="new">New</button>
    <button>Filter</button>
    `
}

function addBookmarkView() {
  return `
    <div>
    <label>Title:</label>
    <input id="title" type="text" placeholder="title">
    </div>
    <div>
    <label>URL Link:</label>
    <input type="text" placeholder="url link">
    </div>
    <div>
    <label>Description:</label> 
    <input type="text-area" placeholder="description">
    </div>
    <div>
    <label>Rating:</label>
    <select name="rating">  
    <option value="one">1</option>
    <option value="two">2</option>
    <option value="three">3</option>
    <option value="four">4</option>
    <option value="five">5</option>
    </select>
    </div>
    <div>
    <button id="cancel">Cancel</button>
    <button id="add">Add</button>
    </div>
    `;
}

//event listener
function newButton() {
    $('main').on('click', '#new', (event) => {
        event.preventDefault(); 
        console.log('new button was clicked!');
        render(addBookmarkView);
    })
}

function cancelButton() {
  $("main").on("click", "#cancel", (event) => {
    event.preventDefault();
    console.log("cancel button was clicked!");
    render(initialView);
  });
}

function addButton() {
  $("main").on("click", "#add", (event) => {
    event.preventDefault();
    console.log("add button was clicked!");
    $("main").append($("#title").val());
  });
}

function render(currentView) {
  $('h1').html('My Bookmark App');
  $("main").html(currentView());
}

function main() {
  newButton();
  cancelButton();
  addButton();
  render(initialView);
}

$(main);
