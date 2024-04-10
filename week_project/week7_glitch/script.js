// QUESTION 1: VARIABLES
console.log("—————————————————————————————");
console.log("——— QUESTION 1: VARIABLES ———");
// For each of the following items, define a variable to hold the value of the item and log it to the console.
console.log();

// A string consisting of your name
let myName = "Evelyn Yoon";
console.log(myName);

// Your favorite number as an integer
let favNum = 10;
console.log(favNum);

// Your favorite number as a string
let favNumString = "10";
console.log(favNumString);

// A boolean value (true/false)
let isCold = false;
console.log(isCold);

// An array consisting of each of the letters of your first name
let nameArr = ["E", "Y"];
console.log(nameArr);

// QUESTION 2: ARITHMETIC
console.log("——————————————————————————————");
console.log("——— QUESTION 2: ARITHMETIC ———");
// Add two strings together. The first string is your first name, and the second string is your last name. Log the result. How do you include a space between them?
let firstName = "Evelyn";
let lastName = "Yoon";
console.log(firstName + " " + lastName);

// Add two integers together to equal the number 100. Log the result.
let hundred = 30 + 70;
console.log(hundred);

// Log the number of characters in the string ‘supercalifragilisticexpialidocious’ by using the length property.
let word = "supercalifragilisticexpialidocious";
console.log(word.length);

// Log the result of this expression: the length of characters in your first name is equal to the length of characters in your last name. (If you did this right you should get "false")
console.log(firstName.length == lastName.length);

// QUESTION 3: RANDOM VALUES
console.log("—————————————————————————————————");
console.log("——— QUESTION 3: RANDOM VALUES ———");
// For each of the following items, log a random number:
// A random number between 0 and 1
console.log(Math.random());

// A random number between 0 and 100
console.log(Math.random() * 100);

// A random number between 20 and 30
console.log(Math.random() * (30 - 20 + 1) + 20);

// A random integer (whole number) between 20 and 30
console.log(Math.floor(Math.random() * (30 - 20 + 1) + 20));

// QUESTION 4: ARRAYS
console.log("—————————————————————————————————");
console.log("——— QUESTION 4: ARRAYS ———");
// Create 3 arrays consisting of the following items. Define variables to store each of the 3 arrays.

// 3 foods
let foods = ["pizza", "burger", "taco", "sushi"];
console.log(foods);

// 4 animals
let animals = ["lion", "tiger", "elephant", "giraffe"];
console.log(animals);

// 4 places
let places = ["paris", "tokyo", "london", "sydney"];
console.log(places);

// 5 adjectives
let adjectives = ["sparkling", "majestic", "breathtaking", "charming", "vibrant"];
console.log(adjectives);

// Log the first food.
console.log(foods[0]);

// Log the last food.
console.log(foods[3]);

// Add another item at the end of the foods array above. If the value above changed, log an answer so that it automatically reads the last item without changing it every time.
foods.push("burrito");
console.log(foods[foods.length - 1]);

// Log a random food.
let randomFoodIndex = Math.floor(Math.random() * foods.length);
console.log(foods[randomFoodIndex]);

// Create an array of arrays consisting of the variables from the previous question. Define a variable to hold this array of arrays and log it.
let array = [foods, animals, places, adjectives];
console.log(array);

// Intermediate question! Log the first food from the *array of arrays* you created. (You may need to look this one up. Search "javascript array of arrays" and see if you can figure it out.)
console.log(array[0][0]);

// QUESTION 5: CONCATENATION
console.log("—————————————————————————————————");
console.log("——— QUESTION 5: CONCATENATION");
// Define a variable for each of the following: a random place, a random adjective, and a random animal, all making reference to the arrays you defined above.
let randomAnimal = Math.floor(Math.random() * animals.length);
let randomPlace = Math.floor(Math.random() * places.length);
let randomAdj = Math.floor(Math.random() * adjectives.length);

// Concatonate this sentence with the indicated random words: “I went to [random place] where I saw a [random adjective] [random animal].” Log it.
// Hint: it might be easier to store the entire sentence in a variable.
let sentence = "I went to " + places[randomPlace] + " where I saw a " + adjectives[randomAdj] + " " + animals[randomAnimal] + ".";
console.log(sentence);

// QUESTION 6: HTML ELEMENTS
console.log("—————————————————————————————————")
console.log("——— QUESTION 6: HTML ELEMENTS PART 1———")
// Create a blank div in HTML and give it an ID. 
// Define a variable called "myElement" to hold that div.
let myElement = document.getElementById("blankDiv");
  
  
// Log that element. What does the result look like?
console.log(myElement);

 
// Change the inner HTML of that element to the random sentence you concatenated above.
myElement.innerHTML = sentence;


 

// QUESTION 7: HTML ELEMENTS PART 2
console.log("—————————————————————————————————")
console.log("——— QUESTION 7: HTML ELEMENTS PART 2———")


// Make two arrays: One with 10 nouns, and one with 10 adjectives.
let nouns = ["cat", "dog", "bird", "tree", "book", "river", "mountain", "ocean", "star", "moon"];
let adjectives2 = ["beautiful", "mysterious", "majestic", "peaceful", "colorful", "sparkling", "enchanted", "serene", "glorious", "tranquil"];

 
// For each span in the description, define a variable that holds that element in JavaScript. Hint: target the ID for each span.
let addn1 = document.getElementById('noun1');
let addn2 = document.getElementById('noun2');
let addn3 = document.getElementById('noun3');
let addn4 = document.getElementById('noun4');
let addn5 = document.getElementById('noun5');
let addn6 = document.getElementById('noun6');
let addn7 = document.getElementById('noun7');

let adda1 = document.getElementById('adj1');
let adda2 = document.getElementById('adj2');
let adda3 = document.getElementById('adj3');
let adda4 = document.getElementById('adj4');


// For each variable above, change the value of that element in the HTML to a random value from the respective arrays (nouns for nouns, adjectives for adjectives).
let randomNoun1 = Math.floor(Math.random() * nouns.length);
let randomNoun2 = Math.floor(Math.random() * nouns.length);
let randomNoun3 = Math.floor(Math.random() * nouns.length);
let randomNoun4 = Math.floor(Math.random() * nouns.length);
let randomNoun5 = Math.floor(Math.random() * nouns.length);
let randomNoun6 = Math.floor(Math.random() * nouns.length);
let randomNoun7 = Math.floor(Math.random() * nouns.length);
addn1.innerHTML = " " + nouns[randomNoun1];
addn2.innerHTML = " " + nouns[randomNoun2];
addn3.innerHTML = " " + nouns[randomNoun3];
addn4.innerHTML = " " + nouns[randomNoun4];
addn5.innerHTML = " " + nouns[randomNoun5];
addn6.innerHTML = " " + nouns[randomNoun6];
addn7.innerHTML = " " + nouns[randomNoun7];

let randomAdj1 = Math.floor(Math.random() * adjectives2.length);
let randomAdj2 = Math.floor(Math.random() * adjectives2.length);
let randomAdj3 = Math.floor(Math.random() * adjectives2.length);
let randomAdj4 = Math.floor(Math.random() * adjectives2.length);
adda1.innerHTML = " " + adjectives2[randomAdj1];
adda2.innerHTML = " " + adjectives2[randomAdj2];
adda3.innerHTML = " " + adjectives2[randomAdj3];
adda4.innerHTML = " " + adjectives2[randomAdj4];
