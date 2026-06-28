let secretWord = ''
let guessedLetters = [];

fetch('example-words.json')
.then(response=>response.json())
.then(word=>{
secretWord = word[Math.floor(Math.random()*word.length)]
console.log(secretWord)


document.getElementById('word-display').textContent = displayWord();
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


