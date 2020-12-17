let MenuToggle = document.querySelector(".page-header__toggle");
let siteMenu = document.querySelector(".site-list");
let pageHeaderTop = document.querySelector(".page-header__top");
let pageHeaderTopWrapper = document.querySelector(".page-header__top-wrapper");
// let modalError = document.querySelector(".modal--error");
// let modalButtonError = modalError.querySelector(".modal-button");
// let modalSucces = document.querySelector(".modal--succes");
// let modalButtonSucces = modalSucces.querySelector(".modal-button");

console.log("start");

// close menu + menu toggle

siteMenu.classList.remove("site-list--menu-open");
pageHeaderTop.classList.remove("page-header__top--menu-open");
pageHeaderTopWrapper.classList.remove("page-header__top-wrapper--menu-open");

MenuToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  siteMenu.classList.toggle("site-list--menu-open");
  pageHeaderTop.classList.toggle("page-header__top--menu-open");
  pageHeaderTopWrapper.classList.toggle("page-header__top-wrapper--menu-open");
});

// modal error

// modalButtonError.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   modalError.classList.remove("modal--show");
// });

// modal succes

// modalButtonSucces.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   modalSucces.classList.remove("modal--show");
// });
