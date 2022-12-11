let menu = document.querySelector("menu"),
menuButton = document.querySelector(".header__menu-button")

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu--opened");
  menu.classList.toggle("menu--closed");
  menuButton.classList.toggle("header__menu-button--closed");
  menuButton.classList.toggle("header__menu-button--opened");
})


