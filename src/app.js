import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";

let button = document.getElementById("dark-mode");
// pour vérifier si la valeur button est bien liée
     console.log(button);  
// Vérifier dans le navigateur

let body = document.querySelector("body");

function darkMode() {
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-white");
}

button.addEventListener("click", darkMode);
