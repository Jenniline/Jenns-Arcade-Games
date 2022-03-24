const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const wins = document.getElementById('win')


let result = 0
let squaresLength = squares.length
let hitPosition
let currentTime = 10
let timerId = null


function randomSquare() {

    squares.forEach(square => { square.classList.remove('mole')})

    let randomSquare = squares[Math.floor(Math.random() * squaresLength)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id

}

squares.forEach(square => {square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
        result++
        score.textContent = result
        hitPosition = null
        if (result == squaresLength) {
            wins.textContent = 'This is 9th hit.You have hit all the squares, you can now go to the next level'
        }
    }
})})


function moveMole() {
    timerId = setInterval(randomSquare,1000)
}
moveMole() 

function countDown() {
    currentTime--           
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over your final score is' + '' + result)
    }
}

let countDownTimerId = setInterval(countDown,1000)

 