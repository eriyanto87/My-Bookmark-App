import ui from "./ui.js";
import api from "./api.js";
import store from "./store.js";

function newButton() {
  $("main").on("click", "#new", (event) => {
    event.preventDefault();
    return $("#x").append(ui.addBookmarkView());
  });
}

function cancelButton() {
  $("main").on("click", "#cancel", (event) => {
    return $(".add-bookmark-form").remove();
  });
}

function addButton() {
  $("main").on("submit", ".add-bookmark-form", (event) => {
    event.preventDefault();
    let title = $("main").find("#title").val();
    let url = $("main").find("#url").val();
    let desc = $("main").find("#desc").val();
    let rating = $("main").find("#rating").val();

    if (!title || title.trim() === "") {
      alert("Missing Title");
      return false;
    }

    if (!url || url.trim() === "" || url === undefined) {
      alert("Missing url");
      return false;
    }

    return api
      .addBookmark({ title, url, desc, rating })
      .then(() => {
        ui.render();
        return moreInfo();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
}

function deleteButton() {
  $("main").on("click", ".delete", (event) => {
    console.log("delete button clicked");

    let id = $(event.target).parent().attr("id");
    console.log(id);
    return api
      .deleteBookmarks(id)
      .then(() => {
          ui.render();
          return moreInfo();
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
}

function moreInfo() {
  $("li").on("click", ".more-info", (event) => {
    console.log("more info button was clicked!");
    let id = $(event.target).parent().attr("id");
    let target = $("main").find(`li[id=${id}]`).find(".bookmark-info");
    console.log(id, target);
    $(target).toggleClass("hidden");
  });
}

function filterBookmarks() {
  $("main").on("change", "#filter", function () {
    console.log("it is changed!");
    const value = $(this).val();
    store.changeFilter(value);
    ui.render();
    return moreInfo();
  });
}

export default {
  addButton,
  cancelButton,
  newButton,
  deleteButton,
  moreInfo,
  filterBookmarks,
};
