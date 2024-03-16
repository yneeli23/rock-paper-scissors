let arr = ["rock", "paper", "scissors"];

let computerChoice = getComputerChoice()
let playerChoice = prompt("Choose your choice: ").toLowerCase();

console.log(playerChoice)
console.log(computerChoice)

function getComputerChoice() {
    return arr[(Math.floor(Math.random() * arr.length))];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "It's a draw!"
    }
    else {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win! Rock beats Scissors"
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You lose! Paper beats Rock"
        }

        else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win! Paper beats Rock"
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You lose! Scissors beats Paper"
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win! Scissors beats Paper"
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You lose! Rock beats Scissors"
        }
    }
}


function playGame() {
    let computerChoice = getComputerChoice()
    let playerChoice = prompt("Choose your choice: ").toLowerCase();


    for (i = 0; i < 5; i++) {
        console.log(playRound(playerChoice, computerChoice))
    }
}

playGame()