import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";
import Menu from "./components/menu";

// Menu()

// const menuHamburger = document.getElementById("menu-hamburger")
// const navLinks = document.getElementById("nav-links")

// menuHamburger.addEventListener('click',()=>{
//   navLinks.classList.toggle('mobile-menu');
//   console.log("ok");
// })

let carousel = document.getElementById("carousel");
let navCarousel = document.getElementById("nav-carousel");
let img = document.querySelector("figure");
let calcul = (2 * Math.PI) / img;
let current = 0;


const onClick = (e) => {
  e.stopPropagation();
  
  let t = e.target;
  if (t.tagName.toUpperCase() != "BUTTON") return;
  
  if (t.classList.contains("next")) {
    current++;
  } else {
    current--;
  }

  img.style.transform = `rotateY(${current * - calcul}rad)`;
};

navCarousel.addEventListener("click", onClick, true);