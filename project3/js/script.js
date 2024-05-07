let darkModeToggle = document.getElementById("darkModeToggle");
let clockNumbers = document.querySelectorAll(".clock ul li");
let body = document.body;
let isDarkMode = false;
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
]; // 변경할 색상 표시

// 클릭 이벤트 리스너
// 달모양, 해모양이 있는 버튼을 클릭하면 이벤트를 발생시키게함
darkModeToggle.addEventListener("click", function () {
  if (isDarkMode) {
    // 다크 모드 해제
    body.classList.remove("dark-mode"); // 다크 모드 클래스 제거
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // 다크 모드 아이콘 변경
    document.getElementsByClassName("center")[0].style.backgroundColor = "#000"; // 시계 중앙 색상 변경
    document.getElementsByClassName("hourHand")[0].style.backgroundColor = "#000"; // 시계 시침 색상 변경
    document.getElementsByClassName("minuteHand")[0].style.backgroundColor = "#000"; // 시계 분침 색상 변경
    // 3, 6, 9, 12 숫자 색상 변경
    clockNumbers.forEach(function(number) {
      if (number.textContent === "3" || number.textContent === "6" || number.textContent === "9" || number.textContent === "12") {
        number.style.color = "#000"; // 숫자 색상 변경
      }
    });
  } else {
    // 다크 모드 활성화
    body.classList.add("dark-mode"); // 다크 모드 클래스 추가
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // 다크 모드 아이콘 변경
    document.getElementsByClassName("center")[0].style.backgroundColor = "#fff"; // 시계 중앙 색상 변경
    document.getElementsByClassName("hourHand")[0].style.backgroundColor = "#fff"; // 시계 시침 색상 변경
    document.getElementsByClassName("minuteHand")[0].style.backgroundColor = "#fff"; // 시계 분침 색상 변경
    clockNumbers.forEach(function(number) {
      if (number.textContent === "3" || number.textContent === "6" || number.textContent === "9" || number.textContent === "12") {
        number.style.color = "#fff"; // 숫자 색상 변경
      }
    });
  }
  isDarkMode = !isDarkMode; // 다크 모드 상태 변경
});

// 시계 숫자 생성 함수
function drawWord() {
  // 고정적으로 60개의 숫자 문자를 표시합니다.
  // move1~move60과 같은 css 클래스가 적용돼있기 때문에 숫자만 늘리면 적용되지 않습니다.
  for (let i = 1; i <= 60; i++) {
    let div = document.createElement("div"); // div 요소 생성
    div.classList.add("move" + i); // 클래스 추가
    let label = document.createElement("label"); // label 요소 생성
    label.classList.add("text-number"); // 클래스 추가
    label.textContent = i; // 숫자 텍스트 설정
    div.appendChild(label); // div에 label 추가

    document.body.appendChild(div); // body에 div 추가
  }
}

window.onload = function () {
  drawWord(); // 시계 숫자 생성 함수 호출
  let hourHand = document.querySelector(".hourHand"); // 시침 요소
  let minuteHand = document.querySelector(".minuteHand"); // 분침 요소
  let secondHand = document.querySelector(".secondHand"); // 초침 요소
  let time = document.querySelector(".time"); // 시간 표시 요소

  function setDate() {
    let today = new Date(); // 현재 시간 가져오기

    let second = today.getSeconds(); // 초
    let secondDeg = (second / 60) * 360 + 360; // 초침 각도 계산
    secondHand.style.transform = `rotate(${secondDeg}deg)`; // 초침 회전 설정

    let minute = today.getMinutes(); // 분
    let minuteDeg = (minute / 60) * 360; // 분침 각도 계산
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`; // 분침 회전 설정

    let hour = today.getHours(); // 시
    let hourDeg = (hour / 12) * 360; // 시침 각도 계산
    hourHand.style.transform = `rotate(${hourDeg}deg)`; // 시침 회전 설정

    // 시간 표시 업데이트
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

    let textNumbers = document.querySelectorAll(".text-number");
    textNumbers.forEach(function (textNumber) {
      textNumber.textContent = second;
    });
  }

  // 1초마다 시계 업데이트 함수 호출
  setInterval(setDate, 1000);
};

 // 문자 색상 변경 함수
function changeColor() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomIndex];

  // drawWord() 함수로 생성된 div 하위에 text-number 클래스를 선택해 색상 변경
  let textNumbers = document.querySelectorAll(".text-number");
  textNumbers.forEach(function (textNumber) {
    textNumber.style.color = randomColor;
  });
}

// 1분마다 문자 색상 변경 함수 호출
setInterval(changeColor, 60000);

// 1분이 길어서 3초로 테스트 한 코드입니다.
// 위 1분 코드를 주석하고 아래 코드의 주석을 풀면 테스트 가능합니다.
//setInterval(changeColor, 3000);
