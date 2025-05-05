const typedtext = document.querySelector(".autotext");
const cursor = document.querySelector(".cursor");

let words = ['Muad' ,'a singer' , 'a producer' ,'a Sketch artist','a myth god'];

const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000 ;

let index = 0 ;
let charIndex = 0 ; 

document.addEventListener("DOMContentLoaded",()=>{
  if (words.length){
    setTimeout(type, newLetterDelay)
  }
})


function type (){
  if(charIndex < words[index].length){
    typedtext.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type ,typingDelay);
  }else{
    setTimeout(erase ,newLetterDelay);
  }
}

function erase (){
  if(charIndex > 0){
    typedtext.textContent = words[index].substring(0,charIndex -1);
    charIndex--;
    setTimeout(erase , erasingDelay)
  }else{
    index++
    if ( index >= words.length){
      index = 0 ;
    }
    setTimeout(type , typingDelay + 1100);
  }
}









