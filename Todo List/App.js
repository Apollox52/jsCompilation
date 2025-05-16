let input = document.getElementById('input');
let output = document.getElementById('output');
let message = document.querySelector('.message-container');
let form = document.querySelector('.form1');

function getTodo(value){
  let todo =document.createElement('div');
  let textEL =document.createElement('span');
  textEL.innerHTML = value ;
  todo.appendChild(textEL);
  message.classList.toggle("success");
  message.textContent="item added";
  
  setTimeout(()=>{
  message.classList.toggle('success');
  }, 2000);


  let closeEl = document.createElement('span')
  closeEl.innerHTML ="&times;"
  closeEl.classList.add('delete');

  closeEl.addEventListener('click',()=>{
  output.removeChild(todo);
  message.classList.toggle('error');
  message.textContent = 'Item deleted';

  setTimeout(()=>{
    message.classList.toggle('error');
    }, 2000);


  });
  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo ; 

}

form.addEventListener(('submit'), e =>{
  e.preventDefault();
  let value = input.value ;
  if(!value.trim()) return ;
  output.appendChild(getTodo(value))
});




