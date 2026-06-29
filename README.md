# Hangman Game



🔗 **Play it here:** [jjyy032659.github.io/hangman](https://jjyy032659.github.io/hangman/)

## How to Play

1. Open `index.html` in a browser, or play it live at the link above.
2. A random word is selected and displayed as a row of underscores.
3. Guess letters by either:
   - Clicking one of the 26 on-screen letter buttons, or
   - Typing a letter on your keyboard
4. Correct guesses reveal the letter in its position(s) in the word.
5. Incorrect guesses add a stage to the hangman drawing.
6. The game ends when:
   - **Win** – every letter in the word has been guessed
   - **Loss** – 10 incorrect guesses have been made (the hangman drawing is complete)
7. Click **Play Again** to start a new round.

## Features Implemented

### MVP

- [x] Random word selection from a word list (`example-words.json`)
- [x] Word displayed as underscores, updating as correct letters are guessed
- [x] 26 dynamically generated letter buttons (created via JavaScript, not hardcoded in HTML)
- [x] Clicking a button registers a guess
- [x] Correct guesses reveal matching letters in the word
- [x] Incorrect guesses advance the hangman image through 11 stages (`h-0.jpg` to `h-10.jpg`)
- [x] Guessed letters are tracked, and their buttons are disabled to prevent re-guessing
- [x] Win/loss detection with an on-screen message
- [x] Play Again button resets the game (currently via page reload)

### Bonus

- [x] **Keyboard input** – letters can be typed instead of clicked, sharing the same guess logic as the on-screen buttons, with the matching button visually disabled to stay in sync
