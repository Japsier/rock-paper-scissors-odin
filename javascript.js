game()

//gets a number from 1 to three, returns each number as a rock, paper or scissors
function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock"
    } else if (num === 2) {
        return "paper"
    } else {
        return "scissor"
    }
}
function getPlayerChoice() {
    userInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    //turns scissor into scissors so both are correct
    if (userInput == "scissor") {
        return "scissors"
    }
    //checks user input is valid
    if (userInput === "rock" || userInput === "paper" || userInput == "scissors") {
        return userInput
    //makes sure it calls itsself again if the user didnt give correct input
    } else {
        alert("Please give correct input")
        getPlayerChoice();
    }
}

//gives 1 point for a win, -1 for a lose, 0 for a tie
function playRound(playerSelection, computerSelection) {
    //returns message for userInput = rock
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You lose! Paper beats Rock");
            return -1
        } else if (computerSelection === "scissors") {
            console.log("You win! Rock beats Scissors");
            return 1
        } else {
            console.log("Tie!");
            return 0
        }
    }
    //returns message if userInput = paper
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You lose! Scissors beats Paper")
            return -1
        } else if (computerSelection === "rock") {
            console.log("You win! Paper beats Rock")
            return 1
        } else {
            console.log("Tie!");
            return 0
        }
    }
    //returns message if userInput = scissors
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors");
            return -1
        } else if (computerSelection === "paper") {
            console.log("You win! Scissors beats paper");
            return 1
        } else {
            console.log("Tie!");
            return 0
        }
    }
    return "Error, something went wrong"
}

//adds the points to let points, returns winner or tie 
function game() {
    //sets points to 0 at start of the game
    let points = 0;

    //loops 5 times: does 5 games.
    for (let i = 0;  i < 5; i++) {
        let num = playRound(getPlayerChoice(), getComputerChoice());
        points += num;
    }
    if (points < 0) {
        console.log("You are the loser!")
    } else if (points > 0) {
        console.log("You are the winner!")
    } else if (points === 0) {
        console.log("Its a tie!")
    } else {
        console.log("Sorry, something went wrong")
    }
}



