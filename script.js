console.log('Hi');

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;    
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") 
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie") {
        return "It's a Tie!"
    }
    else if(result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice() {
    let validateInput = false;
    while(validateInput == false) {
        const choice = prompt("Enter your choice: rock, paper or scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validateInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Game Started");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------------------");
        if(checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;   
        }    
    }
    console.log("Game Over");
    if(scorePlayer > scoreComputer) {
        console.log("Player was the winner");
    } 
    else if(scorePlayer < scoreComputer) {
        console.log("Computer was the winner");
    }
    else {
        console.log("It's a Tie!");
    }
        
    
}

game()
