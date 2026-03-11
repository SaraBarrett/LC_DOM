//pp 9
let imagem = document.getElementById("unicorn");
let heading = document.getElementById("mainheading");

//pp12
let doneTodos = document.querySelectorAll(".done");
let input = document.querySelector("input[type='checkbox']");

// console.log(input);
// console.log(doneTodos);

//pp 15
let myPickles = document.querySelector("span");
console.log(myPickles);

function changeTaste() {
  if (myPickles.innerText == "Yammi") {
    myPickles.innerText = "Yack";
  } else {
    myPickles.innerText = "Yammi";
  }
}
