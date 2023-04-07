
const cartMenu = document.querySelector(".cart")

const dropboxMenu = document.querySelector(".login__label")

const dropboxMenuContainer = document.querySelector(".login__containerBtn")

const navMenu = document.querySelector(".navList")

const navBtn = document.querySelector(".menuLabel")

const toggleMenu = () => {
  navMenu.classList.toggle("openMenu");
};

const toggleDropBox = () => {
  dropboxMenuContainer.classList.toggle("showDropbox");
  if (navMenu.classList.contains("openMenu")) {
    navMenu.classList.remove("openMenu");
    return;
  }
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar__item")) {
    return;
  }
  navMenu.classList.remove("openMenu");
};

const closeOnScroll = () => {
  if (
    !navMenu.classList.contains("openMenu")
  ) {
    return;
  }
  navMenu.classList.remove("openMenu");
};

const init = () => {
  navBtn.addEventListener("click", toggleMenu);
  navMenu.addEventListener("click", closeOnClick);
  dropboxMenu.addEventListener("click", toggleDropBox);
  window.addEventListener("scroll", closeOnScroll);
}

init();