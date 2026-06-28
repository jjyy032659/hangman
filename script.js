let secretWord = ''
let guessedLetters = [];

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
}else{console.log("wrong guess")}

});
    buttonContainer.appendChild(button);
  }}