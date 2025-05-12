let input = document.getElementById('inputBox');

input.addEventListener("input",validate);

function validate (){
  let form = document.querySelector(".mainform");
  let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/ ;

  if (input.value.match(pattern)){
    form.classList.add('valid');
    form.classList.remove('invalid');
  }else if(input.value === ""){
    form.classList.remove('invalid');
    form.classList.remove('valid');
  }else{
    form.classList.add('invalid');
    form.classList.remove('valid');
  };
};
