let indicator = document.querySelector('.scroll-indicator .progress');
let scrollheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll',scroll);

function scroll () {
  let scrollTop = document.documentElement.scrollTop ;
  let scrolled = (scrollTop/scrollheight)*100 ; 
  indicator.style.width = `${scrolled}%`
};