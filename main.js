const CHOICES = 3;

function getComputerChoice() {
    return Math.floor(Math.random() * CHOICES);
}

function getHumanChoice() {
    return prompt("Your Choice: ");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === 1) {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === 2) {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === 0) {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === 2) {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === 0) {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === 1) {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else {
        console.log("You tie!");
    }
}

function showResults(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You win the game!");
        console.log("You: " + humanScore);
        console.log("Computer: " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
        console.log("You: " + humanScore);
        console.log("Computer: " + computerScore);
    } else {
        console.log("The game is tied!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    showResults(humanScore, computerScore);
}

let humanScore = 0;
let computerScore = 0;

playGame();
