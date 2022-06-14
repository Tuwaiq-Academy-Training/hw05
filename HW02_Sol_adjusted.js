function fillRowPieces(string) {
  let row = [];
  const pieces = { p: " p ", r: " r ", n: " n ", b: " b " , q: " q ", k: " k ",P: " P ", R: " R ", N: " N ", B: " B " , Q: " Q ", K: " K " };
  for (const char of string.split('')) {
    if (pieces[char] !== undefined) {
      row.push(pieces[char]);
    } else {
      for (let i = 1; i <= +char; i++) {
        row.push("   ");
      }
    }
  }
  return row;
}

function printChess(chessArr) {
  const head = [" A ", " B ", " C ", " D ", " E ", " F ", " G ", " H "];
  const board = Array(8).fill(Array(8).fill("   "));
  console.log(head.join("|"));
  console.log("--------------------------------");
  board.map((row, index) => {
    colNumber = index + 1;
    row = fillRowPieces(chessArr[index]);
    console.log(row.join("|") +'|' +colNumber);
    console.log("--------------------------------");
  });
}

module.exports = { printChess };
