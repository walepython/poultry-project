const prev = document.getElementById('fa-arrow-left');
const next = document.getElementById('fa-arrow-right');
const NL = document.getElementById('NL');
const DE = document.getElementById('DE');
const ES = document.getElementById('ES');
const lang = document.querySelector('html')
const icons = document.getElementById('true');
const nav = document.getElementById('after');
const arrow = document.getElementById('arrow-left');

// icons.addEventListener('click',() =>{
//  nav.classList.toggle('active')
//  icons.style.display ="none"
// })
// arrow.addEventListener('click',() =>{
//     nav.classList.toggle('active2')
//     icons.style.display ="flex"
// })
// const after = document.getElementById('after');

icons.addEventListener('click', () => {
    nav.style.display = 'flex';
    nav.classList.add('active');
    nav.classList.remove('active2');
    // icons.style.display = 'none'
  });

arrow.addEventListener('click', () => {
  nav.classList.add('active2');
  nav.classList.remove('active');
  // icons.style.display = 'flex'
});

nav.addEventListener('animationend', (e) => {
  if (nav.classList.contains('active2')) {
    // Hide the sidebar after closing animation ends
    nav.style.display = 'none';
  }
});


document.getElementById('NL').addEventListener('click', () => setLanguage('nl'));
document.getElementById('DE').addEventListener('click', () => setLanguage('de'));
document.getElementById('ES').addEventListener('click', () => setLanguage('es'));

function setLanguage(lang) {
  document.documentElement.lang = lang; 

}





prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));

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

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".how4 , .how5, .how6,.how7");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className +="active";
}
