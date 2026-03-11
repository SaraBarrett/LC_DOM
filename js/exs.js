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

//pp20
function eggOrChicken() {
  let imageEgg = document.querySelector("img");

  if (
    imageEgg.getAttribute("src") ==
    "https://devsprouthosting.com/images/egg.jpg"
  ) {
    imageEgg.setAttribute(
      "src",
      "https://devsprouthosting.com/images/chicken.jpg",
    );
  } else {
    imageEgg.setAttribute("src", "https://devsprouthosting.com/images/egg.jpg");
  }
}
function makeRandom() {
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  let mySpans = document.getElementsByTagName("span");

  let count = 0;
  for (let element of mySpans) {
    element.style.color = colors[count++];
  }
}

function changeOrder() {
  let myLis = document.querySelectorAll("li");
  console.log(myLis);
  for (let element of myLis) {
    if (element.classList.contains("highlight")) {
      element.classList.remove("highlight");
    } else {
      element.classList.add("highlight");
    }
  }
}
