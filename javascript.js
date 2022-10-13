const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const divResults = document.querySelector("#results");
const divPointsUser = document.querySelector("#pointsUser");
const divPointsComp = document.querySelector("#pointsComp");
const divWinner = document.querySelector("#winner");

let userPointsCounter = 0;
let compPointsCounter = 0;



function checkWinner() {
    if (userPointsCounter === 5) {
        divWinner.innerText = "You have won, congratulations!";
        userPointsCounter = 0;
        compPointsCounter = 0;
    } else if (compPointsCounter === 5){
        divWinner.innerText = "You have lost, please try harder!";
        compPointsCounter = 0;
        userPointsCounter = 0;

    }
}
function clearWinners() {
    divWinner.innerText = ""
}

function updatePoints() {
    divPointsComp.innerText = compPointsCounter;
    divPointsUser.innerText = userPointsCounter;
}


//gets a number from 1 to three, returns each number as a rock, paper or scissors
function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock"
    } else if (num === 2) {
        return "paper"
    } else {
        return "scissors"
    }
    
}
//gives 1 point for a win, -1 for a lose, 0 for a tie
function playRound(playerSelection, computerSelection) {
    //returns message for userInput = rock
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            divResults.innerText = "You lose! Paper beats Rock";
            compPointsCounter++;
            return
        } else if (computerSelection === "scissors") {
            divResults.innerText = "You win! Rock beats Scissors";
            userPointsCounter++;
            return
        } else {
            divResults.innerText = "Tie!";
            return 
        }
    }
    //returns message if userInput = paper
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            divResults.innerText = "You lose! Scissors beats Paper"
            compPointsCounter++;
            return
        } else if (computerSelection === "rock") {
            divResults.innerText = "You win! Paper beats Rock"
            userPointsCounter++;
            return
        } else {
            divResults.innerText = "Tie!";
            return
        }
    }
    //returns message if userInput = scissors
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            divResults.innerText = "You lose! Rock beats Scissors";
            compPointsCounter++;
            return
        } else if (computerSelection === "paper") {
            divResults.innerText = "You win! Scissors beats paper";
            userPointsCounter++;
            return
        } else {
            divResults.innerText = "Tie!";
            return
        }
    }
    return "Error, something went wrong"
}
function simulateGame(userChoice, computerChoice) {
    playRound(userChoice, computerChoice);
    clearWinners();
    checkWinner();
    updatePoints()
}


rockButton.addEventListener("click", () => {
    simulateGame("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    simulateGame("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    simulateGame("scissors", getComputerChoice());
});