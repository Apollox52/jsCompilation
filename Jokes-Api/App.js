const button = document.getElementById('getJoke');
const displayjoke = document.getElementById('displayJoke');

button.addEventListener('click', getRandomJoke)

function getRandomJoke(){
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  ajax.open('GET', url , true);

  ajax.onreadystatechange = () =>{
    if (ajax.status === 200 && ajax.readyState === 4){
      let data = JSON.parse(ajax.responseText);
      displayjoke.innerHTML = `${data.value}`;
    }else{
      ajax.onerror = onerror();
    }
  };
  ajax.send();

}
function onerror(){
  displayjoke.textContent = `smthng went wrng :(`;
}