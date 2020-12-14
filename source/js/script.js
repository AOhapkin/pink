let MenuToggle = document.querySelector(".page-header__toggle");
let siteMenu = document.querySelector(".site-list");
let pageHeaderTop = document.querySelector(".page-header__top");
let pageHeaderTopWrapper = document.querySelector(".page-header__top-wrapper");

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
