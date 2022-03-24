// https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/

const items = ['item1','item2','item3']
const copyItems = []
let copyItemsResult = " "
let forEachCopyItems = " "


//Converting a for loop to a forEach loop

//before
for (let i = 0; i < items.length; i++) {
   copyItems.push(items[i])
    // console.log('The result of copyitems Array is' + copyItems[i]);
}

//after

items.forEach((item) => console.log(item))

items.forEach((item) => {
   copyItems.push(item)
})

