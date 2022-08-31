const menuMobile = document.getElementById("menu-mobile");
const navMenu = document.getElementById("nav-links")

const Menu = () => {
  const showMenu = () => {
    navMenu.classList.toggle('hidden')
  };
  menuMobile.addEventListener("click", showMenu);
};

export default Menu