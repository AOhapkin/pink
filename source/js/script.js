let menuToggle = document.querySelector(".page-header__toggle");
let siteMenu = document.querySelector(".site-list");
let pageHeaderTop = document.querySelector(".page-header__top");
let pageHeaderTopWrapper = document.querySelector(".page-header__top-wrapper");
let pageHeaderIconOpen = document.querySelector(".page-header__toggle-icon--open");
let pageHeaderIconClose = document.querySelector(".page-header__toggle-icon--close");

siteMenu.classList.remove("site-list--menu-open");
pageHeaderIconOpen.classList.remove("page-header__toggle-icon--hide");
pageHeaderTop.classList.remove("page-header__top--menu-open");
pageHeaderTopWrapper.classList.remove("page-header__top-wrapper--menu-open");

menuToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  siteMenu.classList.toggle("site-list--menu-open");
  pageHeaderTop.classList.toggle("page-header__top--menu-open");
  pageHeaderTopWrapper.classList.toggle("page-header__top-wrapper--menu-open");
  pageHeaderIconOpen.classList.toggle("page-header__toggle-icon--hide");
  pageHeaderIconClose.classList.toggle("page-header__toggle-icon--hide");
});
