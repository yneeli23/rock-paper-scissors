let arr = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return arr[(Math.floor(Math.random() * arr.length))];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "It's a draw!";
    }
    else {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win! Rock beats Scissors";
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        }

        else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win! Paper beats Rock";
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You lose! Scissors beats Paper";
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win! Scissors beats Paper";
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        }
    }
}


function playGame() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Choose your choice: ").toLowerCase();

    let res = playRound(playerChoice, computerChoice);
    console.log(res);
    myArray = res.split(" ");
    console.log(myArray[1] === "win!")

    if (myArray[1] === "win!") {
        playerScore++;
    }
    else if (myArray[1] === "lose!") {
        computerScore++;
    }
    console.log(playerScore, computerScore);
}


for (i = 0; i < 5; i++) {
    playGame();
}

console.log("Game Over\n\n\n")
console.log("----- Score Report -----");
console.log("Player's Score: ", playerScore);
console.log("Computer's Score: ", computerScore);

if (playerScore > computerScore) {
    console.log("You won the Game!");
}
else if (playerScore < computerScore) {
    console.log("You lost the Game :(");
}
else {
    console.log("It's Tie")
}