let arr1 = ["if", "die", "broken-winged bird", "That cannot fly."];
let arr2 = ["when", "go", "broken-winged bird", "That cannot fly."];
let arr3 = ["if", "die", "barren field", "Frozen with snow."];
let arr4 = ["when", "go", "broken-winged bird", "That cannot fly."];
let words = [arr1, arr2, arr3, arr4];

let randomNum = Math.floor(Math.random() * words.length);

let word1 = document.getElementById("word1");
word1.innerHTML = words[randomNum][0];

let word2 = document.getElementById("word2");
word2.innerHTML = words[randomNum][1];

let word3 = document.getElementById("word3");
word3.innerHTML = words[randomNum][2];

let word4 = document.getElementById("word4");
word4.innerHTML = words[randomNum][3];