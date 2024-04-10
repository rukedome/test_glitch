// CHALLENGE PROBLEM:
// Find out if the user likes dogs or cats more.
// Make the background image a gif of the animal based on their response.
// If they write something else, show them another animal.



// STEP 1: HTML
// Add a text input in the HTML with placeholder text that says "Write 'dogs' or 'cats'". Give it an ID.

// <input type="text" id="animal_input" placeholder="Write 'dogs' or 'cats'">


// STEP 2: CSS
// Play around with the body element in the CSS. Give it a background image gif of an animal you found on the web. Once you have that working, comment it out so that the background is grey again. You can use that as reference later.

// STEP 3: VARIABLES
// Save the relevant elements as variables by their IDs.

let animalInput = document.getElementById('animal_input');

// STEP 4: FUNCTION
// Create the function called "generateAnimals()" that will fire when the user presses the button.

function generateAnimals() {
    // STEP 5: TEST
    // Within that function, write something in the console, and click the button a few times to make sure it's showing up.
    console.log("Button clicked!");

    // STEP 6: TEST THE INPUT
    // Within that function, console.log the value of the input.
    console.log(animalInput.value);

    // STEP 7: CONDITIONAL
    // Write an if statement that says:
    // If the answer is "dogs", change the background to a gif of dogs.
    // If the answer is "cats", change the background to a gif of cats.
    // If neither, change the background to a gif of another animal.
    // Hint: use "document.body" to target the body element.
    if (animalInput.value === 'dogs') {
        document.body.style.backgroundImage = "url('dog.gif')";
    } else if (animalInput.value === 'cats') {
        document.body.style.backgroundImage = "url('cat.gif')";
    } else if (animalInput.value === 'rabbit') {
        document.body.style.backgroundImage = "url('rabbit.gif')";
    } else {
        document.body.style.backgroundImage = '';
    }
}

// STEP 5: TEST
// Within that function, write something in the console, and click the button a few times to make sure it's showing up.




// STEP 6: TEST THE INPUT
// Within that function, console.log the value of the input.



// STEP 7: CONDITIONAL
// Write an if statement that says:
// If the answer is "dogs", change the background to a gif of dogs. 
// If the answer is "cats", change the background to a gif of cats.
// If neither, change the background to a gif of another animal.
// Hint: use "document.body" to target the body element.
