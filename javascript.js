const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const divResults = document.querySelector("#results");
const divPointsUser = document.querySelector("#pointsUser");
const divPointsComp = document.querySelector("#pointsComp");
const iconUser = document.querySelector(".userIcon");
const iconComp = document.querySelector(".compIcon");
const emoji1 = document.querySelector(".emoji1");
const emoji2 = document.querySelector(".emoji2");

let userPointsCounter = 0;
let compPointsCounter = 0;



function checkWinner() {
    if (userPointsCounter === 5) {
        divResults.innerText = "Congrats, You have won the game!"
        emoji1.innerText = "🎉"
        emoji2.innerText = "🎉"
        iconComp.innerText = "🖥️"
        iconUser.innerText = "👤"
        userPointsCounter = 0;
        compPointsCounter = 0;
    } else if (compPointsCounter === 5) {
        divResults.innerText = "You have lost, try harder next time!"
        emoji1.innerText = "❌"
        emoji2.innerText = "❌"
        iconComp.innerText = "🖥️"
        iconUser.innerText = "👤"
        compPointsCounter = 0;
        userPointsCounter = 0;

    }
}
function clearWinners() {
    emoji1.innerText = " ";
    emoji2.innerText = " ";
}

function updatePoints() {
    divPointsComp.innerText = compPointsCounter;
    divPointsUser.innerText = userPointsCounter;
}


//gets a number from 1 to three, returns each number as a rock, paper or scissors
function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        iconComp.innerText = "🪨"
        return "rock"
    } else if (num === 2) {
        iconComp.innerText = "🧻"
        return "paper"
    } else {
        iconComp.innerText = "✂️"
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
    iconUser.innerText = "🪨";
    simulateGame("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    iconUser.innerText = "🧻";
    simulateGame("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    iconUser.innerText = "✂️";
    simulateGame("scissors", getComputerChoice());
});