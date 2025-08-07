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
