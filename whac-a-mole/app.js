const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const wins = document.getElementById('win')


let result = 0
let squaresLength = squares.length
let hitPosition

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
    let timerId = null
    timerId = setInterval(randomSquare,1000)
}
moveMole() 