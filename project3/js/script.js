let darkModeToggle = document.getElementById("darkModeToggle");
let clockNumbers = document.querySelectorAll(".clock ul li");
let body = document.body;
let isDarkMode = false;

darkModeToggle.addEventListener("click", function () {
  if (isDarkMode) {
    body.classList.remove("dark-mode");
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.getElementsByClassName("center")[0].style.backgroundColor = "#000";
    document.getElementsByClassName("hourHand")[0].style.backgroundColor = "#000";
    document.getElementsByClassName("minuteHand")[0].style.backgroundColor = "#000";
    clockNumbers.forEach(function(number) {
      if (number.textContent === "3" || number.textContent === "6" || number.textContent === "9" || number.textContent === "12") {
        number.style.color = "#000";
      }
    });
  } else {
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    document.getElementsByClassName("center")[0].style.backgroundColor = "#fff";
    document.getElementsByClassName("hourHand")[0].style.backgroundColor = "#fff";
    document.getElementsByClassName("minuteHand")[0].style.backgroundColor = "#fff";
    clockNumbers.forEach(function(number) {
      if (number.textContent === "3" || number.textContent === "6" || number.textContent === "9" || number.textContent === "12") {
        number.style.color = "#fff";
      }
    });
  }
  isDarkMode = !isDarkMode;
});

function drawWord() {
  for (let i = 1; i <= 60; i++) {
    let div = document.createElement("div");
    div.classList.add("move" + i);
    let label = document.createElement("label");
    label.classList.add("text-number");
    label.textContent = i;
    div.appendChild(label);

    document.body.appendChild(div);
  }
}

window.onload = function () {
  drawWord();
  let hourHand = document.querySelector(".hourHand");
  let minuteHand = document.querySelector(".minuteHand");
  let secondHand = document.querySelector(".secondHand");
  let time = document.querySelector(".time");
  let clock = document.querySelector(".clock");
  let audio = document.querySelector(".audio");

  function setDate() {
    let today = new Date();

    let second = today.getSeconds();
    let secondDeg = (second / 60) * 360 + 360;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    let minute = today.getMinutes();
    let minuteDeg = (minute / 60) * 360;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

    let hour = today.getHours();
    let hourDeg = (hour / 12) * 360;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    time.innerHTML =
      "<span>" +
      "<strong>" +
      hour +
      "</strong>" +
      " : " +
      minute +
      " : " +
      "<small>" +
      second +
      "</small>" +
      "</span>";
  }

  setInterval(setDate, 1000);
};

function changeColor() {
  let colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#800000",
    "#008000",
    "#000080",
    "#808000",
    "#800080",
    "#008080",
    "#C0C0C0",
    "#808080",
    "#800080",
    "#FF1493",
    "#00FA9A",
    "#4682B4",
    "#556B2F",
    "#8B4513",
    "#A0522D",
    "#483D8B",
    "#2E8B57",
    "#9932CC",
  ];
  let randomColor;
  while (true) {
    let randomIndex = Math.floor(Math.random() * colors.length);
    randomColor = colors[randomIndex];
    break;
  }

  let textNumbers = document.querySelectorAll(".text-number");
  textNumbers.forEach(function (textNumber) {
    textNumber.style.color = randomColor;
  });
}

//setInterval(changeColor, 60000);
setInterval(changeColor, 3000);
