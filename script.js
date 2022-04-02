let div = document.querySelector('.result')
let h2 = document.querySelector('.h2')

function playRound() {
    let computerSelection = Math.round(Math.random()*2)
    let result
    if (computerSelection === 0 && playerSelection === 'Rock') {
        result = 'It is a draw'
    } else if (computerSelection === 0 && playerSelection === 'Paper') {
        result = 'Player wins'
    } else if (computerSelection === 0 && playerSelection === 'Scissors') {
        result = 'Computer wins'
    } else if (computerSelection === 1 && playerSelection === 'Rock') {
        result = 'Computer wins'
    } else if (computerSelection === 1 && playerSelection === 'Paper') {
        result = 'It is a draw'
    } else if (computerSelection === 1 && playerSelection === 'Scissors') {
        result = 'Player wins'
    } else if (computerSelection === 2 && playerSelection === 'Rock') {
        result = 'Player wins'
    } else if (computerSelection === 2 && playerSelection === 'Paper') {
        result = 'Computer wins'
    } else if (computerSelection === 2 && playerSelection === 'Scissors') {
        result = 'It is a draw'
    } else result = 'ERROR'

    h2.textContent = `${result}`
}

let playerSelection
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playerSelection = button.innerHTML;
        playRound()
    });
});

