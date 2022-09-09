const body = document.querySelector("body");
const menuMobile = document.getElementById("menu-mobile");
const navMenu = document.getElementById("nav-links");
const menuClose = document.getElementById("close");
const header = document.getElementById("header");

const Menu = () => {
  const showMenu = () => {
    navMenu.classList.toggle("hidden");
    header.classList.toggle("hidden");
    body.classList.toggle("overflow-y-hidden");
  };
  menuMobile.addEventListener("click", showMenu);
  menuClose.addEventListener("click", showMenu);
};

export default Menu;