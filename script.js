let resultOfAGame
function round() {
    let playerSelection = prompt("Rock, Paper, Scissors- Which one do you choose?")
    let figure = playerSelection.charAt(0)
    if (figure === 'r' || figure === 'R') {
        playerSelection = 'rock'
    } else if (figure === 'p' || figure === 'P') {
        playerSelection = 'paper'
    } else {
        playerSelection = 'scissors'
    }

    let computerSelection = Math.round(2*(Math.random()))
    if (computerSelection === 0) {
        computerSelection = 'rock'
    } else if (computerSelection === 1) {
        computerSelection = 'paper'
    } else {
        computerSelection = 'scissors'
    }

    let result

    if (playerSelection === computerSelection) {
        result = 'draw'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'Player wins'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'Player wins'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'Player wins'
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        result = 'Computer wins'
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        result = 'Computer wins'
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        result = 'Computer wins'
    } else {
        result = 'ERROR'
    }

    if (result === 'Player wins') {
        console.log(`You win!!!
        Your answer: ${playerSelection}
        Computer's answer: ${computerSelection}`);
        resultOfAGame = 1
        /*alert(`You win!!!
        Your answer: ${playerSelection}
        Computer's answer: ${computerSelection}`)*/
    } else if (result === 'Computer wins') {
        console.log(`Computer wins!!!
        Your answer: ${playerSelection}
        Computer's answer: ${computerSelection}`);
        resultOfAGame = 2
        /*alert(`Computer wins!!!
        Your answer: ${playerSelection}
        Computer's answer: ${computerSelection}`)*/
    } else if (result === 'draw') {
        console.log(`It's a draw
        Your answer: ${playerSelection}
        Computer's answer: ${computerSelection}`);
        resultOfAGame = 3
        /*alert(`It's a draw
        Your answer: ${playerSelection}
        Computer's answer: ${computerSelection}`)*/
    }
}

let totalPlayerWins = 0
let totalComputerWins = 0

function gameOf5() {
    for (i = 1; i <= 5; i++) {
        round() 
        if (resultOfAGame === 1) {
            totalPlayerWins++
        } else if (resultOfAGame === 2) {
            totalComputerWins++
        } else if (resultOfAGame === 3) {
        
        } else {
            console.log('ERROR')
        }
    }
    console.log(`Your result: ${totalPlayerWins}`, `Computer's result: ${totalComputerWins}`)
    if (totalPlayerWins > totalComputerWins) {
        console.log(`You win whole game`)
    } else if (totalPlayerWins < totalComputerWins) {
        console.log(`Computer wins whole game`)
    } else if (totalPlayerWins === totalComputerWins) {
        console.log(`It's a draw of a whole game`)
    } else {
        console.log(`ERROR IN SUMMING POINTS`)
    }
}

gameOf5()