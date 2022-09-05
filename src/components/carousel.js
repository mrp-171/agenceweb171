const firstSlide = document.querySelector("");
const lastSlide = document.querySelector("");
const leftBtn = document.getElementById("btn-left");
const rightBtn = document.getElementById("btn-right");

const slideRight = () => {
  const currentSlide = document.querySelector();
  if (currentSlide) {
    toggleClassList(currentSlide);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      toggleClassList(nextSlide);
    } else {
      toggleClassList(firstSlide);
    }
  }
};

const slideLeft = () => {
  const currentSlide = document.querySelector();
  if (currentSlide) {
    toggleClassList(currentSlide);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      toggleClassList(nextSlide);
    } else {
      toggleClassList(firstSlide);
    }
  }
};

const btnClick = () => {
  rightBtn.addEventListener("click", slideRight);
  leftBtn.addEventListener("click", slideLeft);
};

btnClick();
