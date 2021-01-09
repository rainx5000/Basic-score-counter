const playerOneBtn = document.querySelector('#playerOneBtn');
const playerTwoBtn = document.querySelector('#playerTwoBtn');
const resetBtn = document.querySelector('#resetBtn');
const h2 = document.querySelector('h2')
const winScore = document.querySelector('.selectContainer').lastElementChild;
const playerOne = h2.children[0];
const playerTwo = h2.children[1];

const buttons = document.querySelectorAll('.buttons button')



buttons.forEach(player => {
    player.addEventListener('click', (e) => {
        playerOneBtn.value = 'playerOne'
        playerTwoBtn.value = 'playerTwo'

        let button = e.target.value //[1] this expression// also we select the button by setting the value of the button to the id of the players score
        if (eval(button)) { //checks if the button exists
            accumulator(eval(button)) //[1] eval() evaluates the expression
        }

        if (playerOne.innerText === winScore.value) {
            winner(playerOne, playerTwo)
        } else {
            winner(playerTwo, playerOne)
        }

    })
});

resetBtn.addEventListener('click', () => {
    playerOne.innerText = '0';
    playerTwo.innerText = '0';
    playerOne.classList.remove('winColor', 'loseColor')
    playerTwo.classList.remove('loseColor', 'winColor')
    playerOneBtn.disabled = false;
    playerTwoBtn.disabled = false;

})


function accumulator(player) {
    const winScoreNum = Number(winScore.value);
    const num = Number(player.innerText);

    let accumulator = num + 1 + ''
    if (num < winScoreNum) {
        player.innerText = accumulator
    }
}

function winner(player1, player2) {
    if (player1.innerText === winScore.value) {
        player1.classList.toggle('winColor')
        player2.classList.toggle('loseColor')
        playerOneBtn.disabled = true;
        playerTwoBtn.disabled = true;
    }
}


