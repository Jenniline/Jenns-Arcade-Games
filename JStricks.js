// https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/

const items = ['item1','item2','item3']
const copyItems = []
let copyItemsResult = " "
let forEachCopyItems = " "


//Converting a for loop to a forEach loop

//before
for (let  i = 0; i < items.length; i++) {
   copyItemsResult.push(items[i]);
   
}


//after
items.forEach((item) => { 
   copyItems.push(item);
});
   



//learning appendChild and createTextNode methods in JavaScript
function addListItem(list) {
   // create and li. Which is a list item in HTML
   const node = document.createElement('li')
   // create a node with string water
   const textNode = document.createTextNode(list)
   //now append the newly created node to the list item
   node.appendChild(textNode)
   //now put the newly created node in the HTML list of items 
   document.getElementById("myList").appendChild(node)
}


console.log('JavaScript Conditional Operator')

