const timeLeftDisplay = document.querySelector('#time-left')
const result = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
let currentIndex = 76;
const width = 9
console.log('me')

function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')

    switch(e.key) {
        case 'ArrowLeft' :
            console.log('move left')
            // In order to move left we move the currentIndex by one
            // This can be written as currentIndex = currentIndex -1
            currentIndex -=1
            break;
        case 'ArrowRight' :
            console.log('move right')
            currentIndex +=1
            break;
        case 'ArrowUp' :
            console.log('move up')
            currentIndex -= width
            break;
        case 'ArrowDown' :
            console.log('move down')
            currentIndex += width
            break;
    }
    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)
