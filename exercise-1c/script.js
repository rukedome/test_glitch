// Your JavaScript here

console.log('I love knitting!')

let buttonElem = document.getElementById("myButton");

function changeBackground() {
  document.body.classList.toggle("ocean");
}

buttonElem.addEventListener("click", changeBackground);
