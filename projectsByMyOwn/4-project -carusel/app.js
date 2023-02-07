// ** The constants
const slides = document.querySelectorAll(".slider-inner__content"),
  sliderDot = document.querySelector(".slider-dot"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next");

//  ** Dynamic change
/* 
  TODO: The code below help to give space based on index for example
  * The first index will be multiply by 100 , second will be multiply by 100
  * And with help of them the style transform left will be given Dynamic
*/

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

//  Initializing variable
let count = 0;
// The timer variable for  autoSlide function
let timer;

//********************* The next and prev buttons
next.addEventListener("click", () => {
  count++;
  clearInterval(timer);
  nextAndPrevSlide();
  checkActive();
  autoSlide();
});
prev.addEventListener("click", () => {
  count--;
  clearInterval(timer);
  nextAndPrevSlide();
  checkActive();
  autoSlide();
});
//********************* The next and prev buttons

// ! All of the functions will be called below there
//*******************************************************************/
sliderDots(slides);
autoSlide();
/**
 ** All of the functions are written below this comment
 */

// ! Auto slide it will move the slide every 2 seconds
//  ? The auto slide is commented
function autoSlide() {
  timer = setInterval(() => {
    count++;
    checkActive();
    nextAndPrevSlide();
  }, 4000);
}
function nextAndPrevSlide() {
  if (count < 0) {
    count = slides.length - 1;
  }
  if (count > slides.length - 1) {
    count = 0;
  }

  // ? What this will do
  // ! The code below will move due to giving the transformX the value
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}
//  ** Creating dynamic dots

function checkActive() {
  const dots = document.querySelectorAll(".slider-dot span");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[count].classList.add("active");
}
function sliderDots(slides) {
  for (let i = 0; i < slides.length; i++) {
    let elem = document.createElement("span");
    if (i === 0) {
      elem.classList.add("active");
    }
    sliderDot.appendChild(elem);
  }
  const dots = document.querySelectorAll(".slider-dot span");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      dots.forEach((dot) => dot.classList.remove("active"));
      if (!e.target.classList.contains("active")) {
        e.target.classList.add("active");
        // ! this count will equal to the index of dots
        count = index;
        nextAndPrevSlide();
        checkActive(dots, index);
      }
    });
  });
}
//*******************************************************************/
