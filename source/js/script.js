let MenuToggle = document.querySelector(".page-header__toggle");
let siteMenu = document.querySelector(".site-list");
let pageHeaderTop = document.querySelector(".page-header__top");
let pageHeaderTopWrapper = document.querySelector(".page-header__top-wrapper");
let pageHeaderIconOpen = document.querySelector(".page-header__toggle-icon--open");
let pageHeaderIconClose = document.querySelector(".page-header__toggle-icon--close");
// let modalError = document.querySelector(".modal--error");
// let modalButtonError = modalError.querySelector(".modal-button");
// let modalSucces = document.querySelector(".modal--succes");
// let modalButtonSucces = modalSucces.querySelector(".modal-button");

// close menu + show menu toggle

siteMenu.classList.remove("site-list--menu-open");
pageHeaderIconOpen.classList.remove("page-header__toggle-icon--hide");
pageHeaderTop.classList.remove("page-header__top--menu-open");
pageHeaderTopWrapper.classList.remove("page-header__top-wrapper--menu-open");

MenuToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  siteMenu.classList.toggle("site-list--menu-open");
  pageHeaderTop.classList.toggle("page-header__top--menu-open");
  pageHeaderTopWrapper.classList.toggle("page-header__top-wrapper--menu-open");
  pageHeaderIconOpen.classList.toggle("page-header__toggle-icon--hide");
  pageHeaderIconClose.classList.toggle("page-header__toggle-icon--hide");
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
