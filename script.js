const dashesDisplay = document.getElementById("dashesDisplay");
const userInput = document.getElementById("userLetterGuess");
const button = document.getElementById("tryGuess");

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

  letterUserTried.push(userLetter);
  dashesDisplay.innerText = dashesText;

  if (!dashesText.includes("_")) {
    wins += 1
    handleWin();
    return;
  }
}

function handleWin() {
  if (wins !== 1) {
    return;
  }
  console.log("Win!");
}

function handleInput() {
  let userLetter = userInput.value.toLowerCase();

  updateDashes(word, userLetter);
  updateDashes(word, userLetter.toUpperCase());
}

// start game here
word = getRandomWord();
updateDashes(word); // set the dashes before any guess

// make elements work with events
button.addEventListener("click", handleInput);
userInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    handleInput();
  }
});