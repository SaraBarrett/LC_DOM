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
