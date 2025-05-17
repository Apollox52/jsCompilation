
const button = document.getElementById('searchbtn');
const paragraph = document.getElementById('p');


button.addEventListener('click',()=>{
  let input = document.getElementById('input').value;
  if (input !== ""){
    let regexp = new RegExp( input, "gi");
    p.innerHTML = p.textContent.replace(regexp, "<mark>$&</mark>");
  }

});
