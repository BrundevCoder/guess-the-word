const dashesDisplay = document.getElementById("dashesDisplay");
const userInput = document.getElementById("userLetterGuess");
const button = document.getElementById("tryGuess");
const userGuesses = document.getElementById("guesses");

const wordsList = [
  "Fire",
  "Water",
  "Flavortown",
  "Arcade"
];

let word = "";
//let tries = 10;
let letterUserTried = [];
let wins = 0;

// Get random word from List
function getRandomWord() {
  const index = Math.floor(Math.random() * wordsList.length);
  return wordsList[index];
}

function updateDashes(word, userLetter) {

  let dashesText = "";

  for (let letter = 0; letter < word.length; letter++) {

    if (userLetter === word[letter]) {
      dashesText += userLetter;
      continue;
    }

    if (letterUserTried.includes(word[letter])) {
      let i = letterUserTried.indexOf(word[letter]);
      dashesText += letterUserTried[i];
      continue;
    }

    dashesText += "_ ";
  }

  /*userLetter !== undefined ? letterUserTried.push(userLetter) : console.log("Debug message here :(");*/

  letterUserTried.push(userLetter)

  dashesDisplay.innerText = dashesText;

  if (!dashesText.includes("_")) {
    wins += 1
    handleWin();
    return;
  }
}

function dashesInit(word) {

  let dashesText = "";

  for (let letter = 0; letter < word.length; letter++) {

    if (letterUserTried.includes(word[letter])) {
      let i = letterUserTried.indexOf(word[letter]);
      dashesText += letterUserTried[i];
      continue;
    }

    dashesText += "_ ";
  }

  dashesDisplay.innerText = dashesText;
}

function handleWin() {
  if (wins !== 1) {
    return;
  }
  userInput.disabled = true;
  button.disabled = true;
  console.log("Win!");
}

function filterUserGuesses() {

  let userLetters = [];

  for (let i = 0; i < letterUserTried.length; i++) {
    let letter = letterUserTried[i];
    letter = letter.toLowerCase();

    if (!userLetters.includes(letter)) {
      userLetters.push(letter);
    }
    
  }

  return userLetters;
}

function handleInput() {
  let userLetter = userInput.value.toLowerCase();

  if (userLetter === "" || userLetter === " ") {
    console.log("User did not used a valid character like a space")
    return;
  }

  updateDashes(word, userLetter);
  updateDashes(word, userLetter.toUpperCase());

  guesses = filterUserGuesses();
  userGuesses.innerText = `Your Guesses: ${guesses.join(", ")}`;

  userInput.value = "";
}

// start game here
word = getRandomWord();
dashesInit(word); // set the dashes before any guess

// make elements work with events
button.addEventListener("click", handleInput);
userInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    handleInput();
  }
});