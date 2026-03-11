//seleccionar elementos pelo seu id
let banner = document.getElementById("banner");

//outros selectores
let squareElements = document.getElementsByClassName("square");

//selectores querySelector (busca primeiro elemento com a classe square)
let firstSquare = document.querySelector(".square");
let mySilkieChickens = document.querySelector("h1");

function changeLang() {
  //manipular o texto
  if (mySilkieChickens.innerText == "Silkie Chickens") {
    mySilkieChickens.innerText = "Galinhas Sedosas";
  } else {
    mySilkieChickens.innerText = "Silkie Chickens";
  }
}

function changeColor() {
  //mudar o atributo style
  mySilkieChickens.style.backgroundColor = "green";
}

function changeImg() {
  //manipular os atributos
  //1ª versão
  // if (banner.src ==
  //   "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80") {
  //   banner.src =
  //     "https://center-portugal.transforms.svdcdn.com/production/images/galinha-branca.jpg?w=1920&h=720&q=100&auto=format&fit=min&crop=focalpoint&fp-x=0.5479&fp-y=0.2387&dm=1720799383&s=e7548edce9a4bb9458eea0ca2e093d4f";
  // } else {
  //   banner.src =
  //     "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
  // }^

  //2ª versão
  if (
    banner.getAttribute("src") ==
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
  ) {
    banner.setAttribute(
      "src",
      "https://center-portugal.transforms.svdcdn.com/production/images/galinha-branca.jpg?w=1920&h=720&q=100&auto=format&fit=min&crop=focalpoint&fp-x=0.5479&fp-y=0.2387&dm=1720799383&s=e7548edce9a4bb9458eea0ca2e093d4f",
    );
  } else {
    banner.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    );
  }
}

function changeListColor() {
  //seleccção
  let myLis = document.getElementsByClassName("toclevel-1");

  //manipulação
  for (let element of myLis) {
    element.style.backgroundColor = "green";
  }
}

function changeDarkMode() {
  //seleccionar
  let myBody = document.querySelector("body");

  if (myBody.classList.contains("day")) {
    myBody.classList.remove("day");
    myBody.classList.add("night");
  } else {
    myBody.classList.remove("night");
    myBody.classList.add("day");
  }
}

//resultado de uma consulta à base de dados que deu login ok
function login() {
  //criar o novo elemento
  let myLoginElement = document.createElement("h3");
  myLoginElement.innerText = "olá Sara, login efectuado!";

  //indicar quem é o pai (onde o novo elemento vai encaixar)
  let myLoginParent = document.getElementById("login-message");
  myLoginParent.appendChild(myLoginElement);

  //remove
  myLoginParent.previousElementSibling.remove();
}
