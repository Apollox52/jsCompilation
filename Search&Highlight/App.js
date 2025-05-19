const paragraph = document.getElementById('p');
const button = document.getElementById('searchbtn');

button.addEventListener('click',()=>{

  let input = document.getElementById('input').value;
  if (input !== ""){
    let regEX = new RegExp (input ,'gi');
  p.innerHTML= p.textContent.replace(regEX,'<mark>$&</mark>')
  }
  
})
