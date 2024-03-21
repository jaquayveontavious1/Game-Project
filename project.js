//ROCK PAPER SCISSORS
//linked all ID's from html to Javascript
const choices = ['rock','paper','scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById("resultDisplay");
//created a function hence when a button is clicked(onclick) this function is executed
function playGame (playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() *3)];
    //math.floor is to make a number an interger while math.random is used to automatically generate a number
    
    let result = "";
     //used if operators, a switch case and terenary operators
    if (playerChoice ===computerChoice) {
        result = "ITS A TIE !"
    }else {
        switch(playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? "YOU WIN" : "YOU LOSE";
                break;
            case 'paper' :
                result = (computerChoice ==='rock') ? "YOU WIN" : "YOU LOSE";
                break;
            case 'scissors' :
                result = (computerChoice ==='paper') ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    //this will display the output of the choices that have been made
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;
    //so that the colours are restarted after every new game
    resultDisplay.classList.remove("greenText", "redText");
    //used a switch case to display colours

    switch (result) {
        case "YOU WIN" :
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE" :
            resultDisplay.classList.add("redText");
            break;
    }
    console.log(result);


    


}