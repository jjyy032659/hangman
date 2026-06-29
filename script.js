let secretWord = ''
let guessedLetters = [];
let wrongGuesses = 0;
let gameOver = false;




document.getElementById('play-again').addEventListener('click', () => {
    location.reload();
});


fetch('example-words.json')
.then(response=>response.json())
.then(word=>{
secretWord = word[Math.floor(Math.random()*word.length)]
console.log(secretWord)
document.getElementById('word-display').textContent = displayWord();
createLetterButtons()
})





const displayWord=()=>{
let displayArray = secretWord.split('').map(letter=>{
  if(guessedLetters.includes(letter)){ 
 return letter;
  }else{
    return '_';
  }

})

return displayArray.join(' ');
}


const createLetterButtons = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const buttonContainer = document.getElementById('letter-buttons');
  buttonContainer.innerHTML = '';


  for (let letter of alphabet) {
  

    const button = document.createElement('button');
    button.textContent = letter;
    button.dataset.letter = letter; 
   button.addEventListener('click', () => {
    
    button.dataset.letter = letter;
handleGuess(letter);

  
button.disabled = true;


});


    buttonContainer.appendChild(button);
  }

}


document.addEventListener('keydown', (event) => {
    const letter = event.key.toLowerCase();

    if (!/^[a-z]$/.test(letter)) return;       // ignore non-letter keys
    if (guessedLetters.includes(letter)) return; // ignore already-guessed letters
    if (!secretWord) return;                    // ignore if word hasn't loaded yet

    handleGuess(letter);

    const matchingButton = document.querySelector(`[data-letter="${letter}"]`);
    if (matchingButton) {
        matchingButton.disabled = true;
    }
});

const checkGameOver = () => {
    const isWin = secretWord.split('').every(char => guessedLetters.includes(char));
    const isLoss = wrongGuesses >= 10;

    if (isWin) {
        document.getElementById('message').textContent = 'You win! ';
        disableAllButtons();
        gameOver = true;
    } else if (isLoss) {
        document.getElementById('message').textContent = `You lose! The word was: ${secretWord}`;
        disableAllButtons();
        gameOver = true;
    }
};

const disableAllButtons = () => {
    const allButtons = document.getElementById('letter-buttons').querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = true);
};

const handleGuess = (letter) => {
     if (gameOver) return;

    guessedLetters.push(letter);

    if (secretWord.includes(letter)) {
        document.getElementById('word-display').textContent = displayWord();
    } else {
        wrongGuesses++;
        document.getElementById('hangman-image').src = `img/h-${wrongGuesses}.jpg`;
    }

    checkGameOver();
};