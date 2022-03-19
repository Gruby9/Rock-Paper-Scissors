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
    alert(`You win!!!
    Your answer: ${playerSelection}
    Computer's answer: ${computerSelection}`)
} else if (result === 'Computer wins') {
    alert(`Computer wins!!!
    Your answer: ${playerSelection}
    Computer's answer: ${computerSelection}`)
} else if (result === 'draw') {
    alert(`It's a draw
    Your answer: ${playerSelection}
    Computer's answer: ${computerSelection}`)
}

