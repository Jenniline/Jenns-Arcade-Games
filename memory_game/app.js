const cardArray = [
    {
        name:'fries',
        img: 'images/fries.png',
    },
    {
        name:'cheesburger',
        img: 'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name:'ice-cream', 
        img: 'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'images/pizza.png',
    },
    {
        name:'fries',
        img: 'images/fries.png',
    },
    {
        name:'cheesburger',
        img: 'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'images/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())  //a nice way to sort an array randomly it changes the position of the cards
console.log(cardArray)      
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosenNames = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log('check for match')

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')

        alert('You have clicked the same image')
    }

    if (cardsChosenNames[0] === cardsChosenNames[1] ) {
        alert('it\'s a match')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosenNames)
    } else {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry try again')
    }

    cardsChosenNames = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you have found them all!'
    }
}

//function to flip the card when it is clicked
function flipCard() {
    const cardId = this.getAttribute('data-id') //this keyword allows us to interact with whatever element is clicked
    cardsChosenNames.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosenIds)
    console.log(cardsChosenNames)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosenNames.length === 2) {
        setTimeout( checkMatch, 500)
    }
    
} 