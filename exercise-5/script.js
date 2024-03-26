let colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];

let numElements = 50;

let container = document.getElementById('pattern-container');

for (let i = 0; i < numElements; i++) {
    let element = document.createElement('div');
    element.classList.add('pattern-element');
    element.style.left = Math.random() * 90 + '%';
    element.style.top = Math.random() * 90 + '%';

    let borderRadius = Math.random() * 50;
    element.style.borderRadius = borderRadius + '%';

    let deg = Math.floor(Math.random() * 360);
    let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    let gradient = `linear-gradient(${deg}deg, ${randomColor1}, ${randomColor2})`;
    element.style.background = gradient;

    container.appendChild(element);
}
