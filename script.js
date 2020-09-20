//html template
//view
function addBookmarkView() {
    return `
    <h1>My Bookmark App</h1>
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
    `
}

//event listener
function cancelButton() {
$('main').on('click', '#cancel', (event) => {
    event.preventDefault(); 
    console.log('cancel button was clicked!');
})
}

function addButton() {
$('main').on('click', '#add', (event) => {
    event.preventDefault();
    console.log('add button was clicked!');
    $('main').append($('#title').val());
})
}

function render(currentView) {
    $('main').html(addBookmarkView());
}

function main() {
    cancelButton();
    addButton();
    render(addBookmarkView);
}

$(main);