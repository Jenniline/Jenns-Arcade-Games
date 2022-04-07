const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 450
const ballDiameter = 20
const scoreDisplay =  document.querySelector('#score')
let timerId
let xDirection = 2
let yDirection = 2

//where the user will always start
const userStart = [230, 10]
let currentPosition = userStart
const ballStart = [270, 40]
let ballCurrentPosition = ballStart


//create the Block
class Block {
    constructor(xAxis,yAxis){
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockWidth]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//all my blocks

const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(10,270),
    new Block(340,270),

    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(10,240),
    new Block(340,240),

    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(10,210),
    new Block(340,210),

]

// draw my Block
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)        
    }
}

addBlocks();

//add User
const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)

function drawUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'   
}

function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}

//move User
function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10
                drawUser()
            }
        
        break;

        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] += 10
                drawUser()
            }
            break;
        }

      
}

document.addEventListener('keydown', moveUser)

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
drawBall()

//move Ball

function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection

    drawBall()
}
timerId = setInterval(moveBall, 30)

//check for collisions

function checkForCollisions() {
    //check for wall collisons

    if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= (boardHeight - ballDiameter))
    {
      changeDirection()
    }

    //check for game over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId)
        scoreDisplay.innerHTML = 'You lose'
        document.removeEventListener('keydown', moveUser)

    }

}

function changeDirection() {
    if (xDirection === 2 && yDirection === 2 ) {
        yDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = -2
        return   
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    } 

    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }


}



