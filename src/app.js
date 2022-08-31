import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";
import Menu from "./components/menu";

Menu()

const menuHamburger = document.getElementById("menu-hamburger")
const navLinks = document.getElementById("nav-links")



menuHamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('mobile-menu');
  console.log("ok");
})
