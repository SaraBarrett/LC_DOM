let helloBtn = document.getElementById("helloBtn");
let loginBtn = document.getElementById("loginBtn");
let divEvent = document.getElementById("divEvent");
let myList = document.getElementById("list");
let myForm = document.getElementById("form");

function helloW() {
  alert("hello mundo!");
}

function login() {
  let pass = prompt("qual é a pass?");
}

function changeToGreen() {
  this.style.backgroundColor = "green";
}

helloBtn.addEventListener("mouseout", helloW);
loginBtn.addEventListener("click", login);
//loginBtn.addEventListener("click", helloW);
divEvent.addEventListener("click", changeToGreen);
loginBtn.addEventListener("click", changeToGreen);
helloBtn.addEventListener("click", changeToGreen);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "l" || event.key == "L") {
    alert("evento de teclado!" + event.key);
  }
});

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //traz um objecto com TODOS os inputs do formulário
  let data = new FormData(this);

  //acede ao input do formulário que tem no name newAnimal
  let animal = data.get("newAnimal");

  let newLi = document.createElement("li");
  newLi.innerText = animal;

  myList.appendChild(newLi);

  this.reset();

});
