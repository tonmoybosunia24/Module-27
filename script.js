function handleKeyboardButtonPress(event){
       const playerPressed = event.key;
       console.log("player Pressed", playerPressed)
       // Stop Game When Pressed Escape
       if(playerPressed === "Escape"){
              gameOver()
       }
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
              if(UpdatedLife === 0){
                     gameOver();
              }
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
       hideElementById("Final-Score")
       showElementById("Play-Ground-Container")
       // Reset Score And Life
       setTextElementValueById("Current-Life", 5);
       setTextElementValueById("Current-Score", 0);
       continueGame()
}
function gameOver(){
       hideElementById("Play-Ground-Container")
       showElementById("Final-Score")
       // Update Final Score
       const lastScore = getTextElementValueById("Current-Score")
       setTextElementValueById("Last-Score", lastScore)
       // Clear The Last Selected Highlights
       const currentAlphabet = getElementTextById("Current-Alphabet")
       removebackgroundColorById(currentAlphabet)
}