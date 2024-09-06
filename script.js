function handleKeyboardButtonPress(event){
       const playerPressed = event.key;
       // Get the Expected Key To pressed
       const currentAlphabetElement = document.getElementById("Current-Alphabet")
       const currentAlphabet = currentAlphabetElement.innerText;
       const ExpectedAlphabet = currentAlphabet.toLowerCase();
       // Checked Matched Or Not
       if(playerPressed === ExpectedAlphabet){
              // Score Update
              const currentScore = getTextElementValueById("Current-Score")
              const updatedScore = currentScore + 1;
              setTextElementValueById("Current-Score", updatedScore)
              // Start A New Round
              removebackgroundColorById(ExpectedAlphabet)
              continueGame()
       }
       else{
              const currentLife = getTextElementValueById("Current-Life");
              const UpdatedLife = currentLife - 1;
              setTextElementValueById("Current-Life", UpdatedLife)
       }
}
document.addEventListener("keyup", handleKeyboardButtonPress)

function continueGame(){
       const alphabet = getARandomAlphabet()
       const currentAlphabetElement = document.getElementById("Current-Alphabet");
       currentAlphabetElement.innerText = alphabet;
       // Set Background Color
       setBackgroundColorById(alphabet)
}
function play(){
       hideElementById("Home-Container")
       showElementById("Play-Ground-Container")
       continueGame()
}