
function changeFilter(num) {
    return this.filter = Number(num);
  } 

  export default {
    bookmarks: [],
    adding: true,
    error: null,
    filter: 0,
    changeFilter
  } 