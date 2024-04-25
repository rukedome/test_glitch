document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('container');
    let bubbleColors = ['#FF1493', '#4682B4', '#B8860B', '#8A2BE2', '#FF8C00'];
    let bubbleCount = 15; // 초기 물방울 개수

    function createBubble() {
        let bubble = document.createElement('div');
        bubble.classList.add('bubble');
        let color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)]; // 랜덤한 색상 선택
        bubble.style.boxShadow = `0 0 20px ${color} inset`; // box-shadow를 이용하여 물방울 모양 생성
        container.appendChild(bubble);
        return bubble;
    }

    function animateBubbles() {
        let bubbles = document.querySelectorAll('.bubble');

        bubbles.forEach(bubble => {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            // let size = Math.random() * 50 + 20;
            let size = 9;
            let speed = Math.random() * 4 + 1;

            bubble.style.left = x + 'px';
            bubble.style.top = y + 'px';
            bubble.style.width = 9 + 'rem';
            bubble.style.height = 9 + 'rem';

            let directionX = Math.random() < 0.5 ? -1 : 1;
            let directionY = Math.random() < 0.5 ? -1 : 1;

            function moveBubble() {
                x += speed * directionX;
                y += speed * directionY;

                if (x + size > window.innerWidth || x < 0) {
                    directionX *= -1;
                }

                if (y + size > window.innerHeight || y < 0) {
                    directionY *= -1;
                }

                bubble.style.left = x + 'px';
                bubble.style.top = y + 'px';

                requestAnimationFrame(moveBubble);
            }

            moveBubble();
        });
    }

    // 초기 물방울 생성
    for (let i = 0; i < bubbleCount; i++) {
        createBubble();
    }

    animateBubbles();
});

let dateDisplay = document.querySelector(".date");
let timeDisplay = document.querySelector(".time");
let container = document.getElementById("container");
let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let hours;
let minutes;
let seconds;
let sufix;

let month;
let day;
let year;

setTime();

setInterval(() => {
  setTime();
}, 1000);

function setTime() {
  let date = new Date();
  
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  
  if (hours < 10) {
    hours = "0" + hours;
  }
  
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
  timeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
  
  dateDisplay.innerHTML = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
