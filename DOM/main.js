// toggle function to handle the hamburguer icon on small screens 
// this code was inspired from contents of W3 Schools
function classToggle() {
    const navs = document.querySelectorAll('.navbar-items');
    navs.forEach(nav => nav.classList.toggle('navbar-ToggleShow'));
}

document.querySelector('.icon').addEventListener('click', classToggle);

// Slide bit
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// This function order the slides to be outputed
// This code was inspired from contents of W3 Schools
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}

// click events 
// This code was inspired from contents of W3 schools and MDN
function slideButtons(){
  let left = document.querySelector('.prev');
  let right = document.querySelector('.next');  

  left.addEventListener('click', function(){
    plusSlides(-1);
  })

  right.addEventListener('click', function(){
    plusSlides(1);
  })
}

showSlides(slideIndex);
slideButtons();

// Touch events listener
// this code was inspired from contents of W3 Schools and MDN
document.addEventListener('DOMContentLoaded', (event) => {
  let touchStart = 0;
  let touchEnd = 0;

  const slider = document.querySelector('.slideshow-container');

  function handleGesture(){
    if(touchEnd < touchStart){
      plusSlides(1);
    }
    if(touchEnd > touchStart){
      plusSlides(-1);
    }
  }

  slider.addEventListener('touchstart', (event) =>{
    touchStart = event.changedTouches[0].screenX;
    touchEnd = event.changedTouches[0].screenX;
    handleGesture();
  }, false);
})
