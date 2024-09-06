function handleKeyboardButtonPress(event){
       const playerPressed = event.key;
       // console.log(playerPressed)
       if(playerPressed === "Escape"){
              const PlayGroundContainer = document.getElementById("Play-Ground-Container");
              PlayGroundContainer.classList.add("hidden")
              const FinalScore = document.getElementById("Final-Score")
              FinalScore.classList.remove("hidden")
              const lastScore = document.getElementById("Last-Score")
              const currentScore = document.getElementById("Current-Score");
              const CurrentScoreNumber = parseInt(currentScore.innerText)
              lastScore.innerText = CurrentScoreNumber
       }
       const currentAlphabetElement = document.getElementById("Current-Alphabet")
       const currentAlphabet = currentAlphabetElement.innerText;
       const ExpectedAlphabet = currentAlphabet.toLowerCase();
       if(playerPressed === ExpectedAlphabet){
              const AlphabetsString = "abcdefghijklmnopqrstuvwxyz";
              const Alphabets = AlphabetsString.split("");
              const RandomNumber = Math.random()*25
              const Index = Math.round(RandomNumber)
              const RandomAlphabet = Alphabets[Index]
              const CurrentALphabet = document.getElementById("Current-Alphabet");
              CurrentALphabet.innerText = RandomAlphabet;
              function setBackgroundColorById(elementId){
                     const element = document.getElementById(elementId)
                     element.classList.add("bg-orange-400")
              }
              setBackgroundColorById(RandomAlphabet)
              function removebackgroundColorById(elementId){
                     const element = document.getElementById(elementId);
                     element.classList.remove("bg-orange-400")
              }
              removebackgroundColorById(ExpectedAlphabet)
              const currentScore = document.getElementById("Current-Score");
              const CurrentScoreNumber = parseInt(currentScore.innerText)
              const updatedScore = CurrentScoreNumber + 1
              currentScore.innerText = updatedScore;
       }
       else{
              const currentLife = document.getElementById("Current-Life");
              const currenLifeNumber = parseInt(currentLife.innerText);
              const updatedLifeScore = currenLifeNumber - 1;
              currentLife.innerText = updatedLifeScore;
              if(updatedLifeScore === 0){
                     const PlayGroundContainer = document.getElementById("Play-Ground-Container");
                     PlayGroundContainer.classList.add("hidden") 
                     const finalScore = document.getElementById("Final-Score");
                     finalScore.classList.remove("hidden")
                     const lastScore = document.getElementById("Last-Score")
                     const currentScore = document.getElementById("Current-Score");
                     const CurrentScoreNumber = parseInt(currentScore.innerText)
                     lastScore.innerText = CurrentScoreNumber
              }
       }
}
document.addEventListener("keyup", handleKeyboardButtonPress)
const AlphabetsString = "abcdefghijklmnopqrstuvwxyz";
const Alphabets = AlphabetsString.split("");
const RandomNumber = Math.random()*25
const Index = Math.round(RandomNumber)
const RandomAlphabet = Alphabets[Index]
const CurrentALphabet = document.getElementById("Current-Alphabet");
CurrentALphabet.innerText = RandomAlphabet;
function setBackgroundColorById(elementId){
       const element = document.getElementById(elementId)
       element.classList.add("bg-orange-400")
}
setBackgroundColorById(RandomAlphabet)
function play(){
       const HomeContainer = document.getElementById("Home-Container");
       HomeContainer.classList.add("hidden");
       const PlayGroundContainer = document.getElementById("Play-Ground-Container");
       PlayGroundContainer.classList.remove("hidden")
       
}
function finalscore(){
       console.log("aaa")
       const FinalScore = document.getElementById("Final-Score")
       FinalScore.classList.add("hidden")
       const PlayGroundContainer = document.getElementById("Play-Ground-Container");
       PlayGroundContainer.classList.remove("hidden")
       const currentScore = document.getElementById("Current-Score");
       currentScore.innerText = 0;
       const currentLife = document.getElementById("Current-Life");
       currentLife.innerText = 5
}