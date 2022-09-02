const menuMobile = document.getElementById("menu-mobile");
const navMenu = document.getElementById("nav-links")
const menuClose = document.getElementById("close")

const Menu = () => {
  const showMenu = () => {
    navMenu.classList.toggle('hidden');
    
  };
  menuMobile.addEventListener("click", showMenu);
  menuClose.addEventListener("click", showMenu);
};

export default Menu