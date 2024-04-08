// CHALLENGE PROBLEM:
// Make the text get blurrier as the user slides the slider.
// Towards the end, display the alert that says they need to see a doctor.

// STEP 1: HTML
// Add an input slider in the HTML. Give it an ID, a max, min, and current value.

// <input type="range" id="blur_range" min="0" max="20" value="10">

// STEP 2: CSS
// Take a look at line 21 in the CSS. What number do you have to play around with to make the text more or less blurry? Test things out statically in the CSS first. Take note of the bottom threshold and the top threshold. Add those as the min and max values in the HTML input element.

// STEP 3: VARIABLES
// Save the relevant elements as variables by their IDs. You'll need three.
// Hint: One of them is that "alert".

let slider = document.getElementById("blur_range");
let alertMessage = document.getElementById("alert");
let blurText = document.getElementById("text");

// STEP 4: FUNCTION
// Create a function that will fire when the user slides the slider.

function handleSliderChange() {
  console.log(slider.value);
  blurText.style.textShadow = `0 0 ${slider.value}px rgba(0,0,0)`; // Step 6: Change text blur
  if (parseInt(slider.value) > 15) {
    alertMessage.style.display = "block"; // Step 7: Display alert if slider value > 15
  } else {
    alertMessage.style.display = "none";
  }
}

// STEP 5: TEST FUNCTION
// Within that function, just to test it out, see if you can console.log the value of the slider at any given moment.
handleSliderChange();

// Step 6.
// Within that function, change the CSS of the text shadow to mirror the value of the slider at any given moment. Hint: you'll have to concatonate (or use template literals).

// STEP 7: IF STATEMENT
// Within that function, write an if statement that says if the slider value is greater than 15, then show the alert. Otherwise, don't show the alert at all.
