
function changeFilter(num) {
    console.log(typeof num)
    return this.filter = Number(num);
  } 

  export default {
    bookmarks: [],
    adding: true,
    error: null,
    filter: 0,
    changeFilter
  } 