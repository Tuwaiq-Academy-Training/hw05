




let board = ""
let board2 = "R  |N  |B  |Q  |K  |B  |N  |R  |"
let board3 = "r* |n* |b* |q* |k* |b* |n* |r* |"

let rows = 1
let carter = ["A", "B", "C", "D", "E", "F", "G", "H"]
let number = 1
console.log(carter.join("   "))
console.log("                                  ");
let a = "a"
let b = "b"
while (rows <= 8) {
  let cols = 0
  let number = 0

  let previousHashed

  if (rows % 2 === 0) {
    previousHashed = true
  } else {
    previousHashed = false
  }

  for (let i = 8; cols < i; ) {
    if (rows == 2) {
      board += "P  |"
    } else if (rows == 7) {
      board += "p* |"
    } else if (rows == 1) {
      board += board2
      break
    } else if (rows == 8) {
      board += board3
      break
    } else board += "   |"

    previousHashed = !previousHashed

    cols++
  }

  board += rows + "\n"
  board += "----------------------------------"
  board += "\n"
  rows++
}

console.log(board)
