let stickers = [['#FFB3BA', 20], ['#FFDFBA', 190], ['#E3FFBA', 173], ['#FFFFBB', 0], ['#FFB3BA', 153], ['#E3FFBA', 0], ['#FFDFBA', 5]];
let numElements = 7;

let container = document.getElementById('container');

for (let sticker of stickers) {
    let element = document.createElement('div');
    element.classList.add('sticker-element');
    let randomX = Math.floor(Math.random() * 20); 
    let randomY = Math.floor(Math.random() * 50);
  
    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}rem`;

    element.style.backgroundColor = sticker[0]
    let deg = sticker[1];
    element.style.transform = `rotate(${deg}deg)`;;
    container.appendChild(element);
}
