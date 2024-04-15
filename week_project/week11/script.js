//////////// SAVE VARIABLES ////////////
// 1. Start by saving the two HTML elements as variables, since we're going to be targeting/modifying them.

// 2. For these exercises, you're also going to need to target the "body" tag. I've already saved the body as a variable called "bodyElem" below.

let fishElem = document.getElementById('fish');
let textElem = document.getElementById('textHere');
let bodyElem = document.body;

let fishArray = [
  "https://i.imgur.com/qJC3dUj.png",
  "https://png.pngtree.com/png-vector/20230910/ourmid/pngtree-kaiserfisch-fish-tank-png-image_9233480.png",
  "https://pngfre.com/wp-content/uploads/fish-44-1024x602.png",
  "https://static.vecteezy.com/system/resources/previews/024/705/192/non_2x/fish-with-ai-generated-free-png.png",
  "https://purepng.com/public/uploads/large/purepng.com-angelfishfoodfishnatureanimalseaoceanseafood-981524654222kipo8.png"
];

//////////// FUNCTION: ON CLICK ////////////
// 3. Write a function that replaces the fish with a random fish image from the array every time you click anywhere on the page. 
// Hint: use "___.src = __"

function replaceFish() {
  let randomIndex = Math.floor(Math.random() * fishArray.length);
  fishElem.src = fishArray[randomIndex];
}

bodyElem.addEventListener('click', replaceFish);

//////////// FUNCTION: ON MOUSE MOVE ////////////
// 4. Write a function that grabs the mouse coordinates as you move the mouse and prints it inside of the "textHere" div. 
// The final result should look something like: "100, 200" (including the comma)

// 5. Next, you'll make the fish follow the mouse. On mouse move, change the top and left values of the fish image to be that of the x cursor position and y cursor position, respectively. 
// Hint: don't forget " + px" ;)

// 6. Once you have that working, change the position from "fixed" to "static", and back again. Why does it break?

function moveFish(event) {
  let x = event.clientX;
  let y = event.clientY;

  textElem.textContent = x + ", " + y;

  fishElem.style.left = x + "px";
  fishElem.style.top = y + "px";
}

bodyElem.addEventListener('mousemove', moveFish);

// 7. As you move your mouse across the screen, make the background color shift through the spectrum of hues. 
// Hint: use HSL values.

function changeBackgroundColor(event) {
  let x = event.clientX;
  let y = event.clientY;
  let hue = (x / window.innerWidth) * 360;
  let lightness = (y / window.innerHeight) * 100;

  bodyElem.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
}

bodyElem.addEventListener('mousemove', changeBackgroundColor);

// 8. As you move your mouse from up to down, make the background go from dark to light.
// Hint: Note how the lightness value in HSL is a percentage...you may have to scale down the value you concatenate by dividing.

//////////// FUNCTION: ON KEY DOWN / ON KEY UP ////////////
// 8. When the user types any key, add the class "reef" to the body element. 
// Hint: If you're having trouble changing the class, see other ways of manipulating the DOM, Week 10.

// 9. When the user lifts any key, remove the class "reef" from the body element.

// 10. Write an "if" statement inside your "keydown" function that says it only works if the key pressed is a spacebar. 
// If you're stuck, try console.logging "e.key" to see what result you have to work with.

function addReefClass(event) {
  if (event.key === ' ') {
    bodyElem.classList.add('reef');
  }
}

function removeReefClass(event) {
  bodyElem.classList.remove('reef');
}

bodyElem.addEventListener('keydown', addReefClass);
bodyElem.addEventListener('keyup', removeReefClass);
