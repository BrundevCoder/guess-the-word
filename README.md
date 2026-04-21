<img width="1365" height="623" alt="Captura de ecrã 2026-04-21 204434" src="https://github.com/user-attachments/assets/123d8599-aee3-469d-bf6d-afd56e32d2a3" />

# Guess the Word

In this project, the code selects a word from the `wordsList` array (I'm planning to add more soon), and the player can try as many times as they want, simply by entering one letter at a time. The code saves their attempts to show them when that letter has already been used. And if the player wants to play again, that's also possible! And if at the beginning, before the player tries, the word is found to be too short or too long, they can simply double-click the "Another word?" button.

## Why did I create this?

I wanted to create a fun game and challenge myself to learn more about array and string manipulation! I really enjoyed making this project, and I hope you find it fun and can enjoy it while you spend some time!

## What does each function do?

- `getRandomWord`: Returns a random word using `index = Math.floor(Math.random() * wordsList.length)`;
- `updateDashes`: This is the main function of the game! It controls where to place your guess (if your letter is in the secret word);
- `dashesInit`: I had to create this function to initialize the underscores according to the word length. Your question might be why I didn't use `updateDashes`. Simply put, that function uses +1 argument and would give an undefined error;
- `handleWin`: This function only does what it's supposed to do when you win! How to control the Victory screen!
- `filterUserGuesses`: This function retrieves all the letters you tried and returns them to another function later!
- `handleInput`: This function handles reading your input and deciding what to do with it!

## Update 1:
- Finished UI
- Complete JavaScript
- Fixed Bugs
