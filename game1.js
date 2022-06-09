
const wat = require('./chessBoardStates.json')
let board = ""
let rows = 0
let numbers = []
let carter = ["  a", "b", "c", "d", "e", "f", "g", "h"]
let carter2 =[ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ]
let player= [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ]
console.log(carter.join("" + " "))

while (rows <= 8) {
  let cols = 0
  let number = 0

  let previousHashed

  if (rows % 2 === 0) {
    previousHashed = true
  } else {
    previousHashed = false
  }

  while (cols <= 8) {
    if (previousHashed) {
      board += " |"
      number+="2"
    } else {
      board += " |"
    }

    previousHashed = !previousHashed

    cols++
  }
  

  
  board += rows + " \n" 
  board += "------------------"
  board += "\n"
  var x = ['a', 'b', 'c', 'd', 'e', 'f'];

// Copy elements at end to the beginning 
console.log(x.copyWithin(0, 3));

x = ['a', 'b', 'c', 'd', 'e', 'f'];

// Copy elements at the beginning to the end 
console.log(x.copyWithin(3, 0));

x = ['a', 'b', 'c', 'd', 'e', 'f'];

// Copy first 3 elements to middle
console.log(x.copyWithin(2, 0, 3));

  rows++
}
// insertColumnAtRight()
console.log(board)

//import User from './user.js';

