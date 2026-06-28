let secretWord = ''
let guessedLetters = [];
let wrongGuesses = 0;
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


let createLetterButtons = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const buttonContainer = document.getElementById('letter-buttons');
  buttonContainer.innerHTML = '';


  for (let letter of alphabet) {
  

    const button = document.createElement('button');
    button.textContent = letter;
   button.addEventListener('click', () => {
    
   guessedLetters.push(letter); 
   
   if(secretWord.includes(letter)){
   document.getElementById('word-display').textContent = displayWord();
   
}else{
    
        wrongGuesses++;
   console.log("wrong guess");
   document.getElementById('hangman-image').src = `img/h-${wrongGuesses}.jpg`;
    
   
}
button.disabled = true;

checkGameOver();
});


    buttonContainer.appendChild(button);
  }

}

const checkGameOver = () => {
    const isWin = secretWord.split('').every(char => guessedLetters.includes(char));
    const isLoss = wrongGuesses >= 10;

    if (isWin) {
        document.getElementById('message').textContent = 'You win! ';
        disableAllButtons();
    } else if (isLoss) {
        document.getElementById('message').textContent = `You lose! The word was: ${secretWord}`;
        disableAllButtons();
    }
};

const disableAllButtons = () => {
    const allButtons = document.getElementById('letter-buttons').querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = true);
};