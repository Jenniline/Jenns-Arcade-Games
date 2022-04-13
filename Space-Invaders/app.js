const grid = document.querySelector('.grid')
let currentShooterIndex = 2
let width = 15
let direction = +1
let invadersId
let goingRight = true



for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
  }
//This has to be under the for loop because it is at the for loop that the divs are created 
const squares = Array.from(document.querySelectorAll('.grid div'))


//indexes where the aliens will be in
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39

  ]
  
  function drawInvader() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
  
    }
  }

drawInvader()
//To remove the Invaders
function removeInvader() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader')
  
    }
  }

  removeInvader()

console.log(alienInvaders.length)

//to draw the shooter
squares[currentShooterIndex].classList.add('shooter')


//first thing to move the shooter is to remove the shooter then we listen to keys from our keyboard
function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch (e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !==0) currentShooterIndex -= 1 
        break
        case 'ArrowRight':
            if (currentShooterIndex % width !==0) currentShooterIndex += 1 
        break;
    }
    squares[currentShooterIndex].classList.add('shooter')

}
document.addEventListener('keydown',moveShooter)

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
    removeInvader()

    if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width -1
            direction =-1
            goingRight = true
            
        }
    }

    if (rightEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width +1
            direction =-1
            goingRight = false
            
        }
    }

   


    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction
        
    }
    drawInvader()

}

setInterval(moveInvaders,500)