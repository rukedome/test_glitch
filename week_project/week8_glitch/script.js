// QUESTION #1: TARGET HTML ELEMENTS
// Target each square by its ID and store each one in a variable.

let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let square4 = document.getElementById("square4");
let square5 = document.getElementById("square5");


// QUESTION #2: ARRAY OF COLORS
// Create an array for the below colors and save it in a variable.
let colorsPalette = ["#F86530", "#3AB4FF", "#FFDF37", "#6EA02F", "#774EEC", "#DF4EEC"];

// Palette: #F86530, #3AB4FF, #FFDF37, #6EA02F, #774EEC, #DF4EEC


// QUESTION #3: RANDOM COLOR
// Give each square a random color using the array of colors you've created.

let squares = document.getElementsByClassName("square");

for (let i = 0; i < squares.length; i++) {
    let randomColor = colorsPalette[Math.floor(Math.random() * colorsPalette.length)];
    squares[i].style.backgroundColor = randomColor;
}


// QUESTION #4: RANDOM SIZE
// Give each square a random size.
for (let i = 0; i < squares.length; i++) {
    let randomSize = Math.floor(Math.random() * 100) + 50;
    squares[i].style.width = randomSize + "px";
    squares[i].style.height = randomSize + "px";
}


// QUESTION #5: RANDOM...YOU CHOOSE!
// Give each square a random style property of your choosing.
// Think about what CSS properties you'd like to randomize. Position? Rotation? Border radius?
// When in doubt, look at how the CSS property is normally written and what you'll need to concatenate.
// For instance, does the property value require a unit of measurement like `px` or `vw`?

let propertiesToRandomize = ["transform", "borderRadius"];

for (let i = 0; i < squares.length; i++) {
    let randomProperty = propertiesToRandomize[Math.floor(Math.random() * propertiesToRandomize.length)];
    if (randomProperty === "transform") {
        let randomRotation = Math.floor(Math.random() * 360); 
        squares[i].style.transform = "rotate(" + randomRotation + "deg)";
    } else if (randomProperty === "borderRadius") {
        let randomBorderRadius = Math.floor(Math.random() * 50);
        squares[i].style.borderRadius = randomBorderRadius + "px"; 
    }
}