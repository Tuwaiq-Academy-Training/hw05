const chessgame = require ('./chessBoardStates.json')
let editchess = [
    chessgame.game1.split('/'),
    chessgame.game2.split('/'),
    chessgame.game3.split('/'),
]
 let chess = [
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ',' ', 1],
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ',' ', 2],
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ',' ', 3],
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ',' ', 4],
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ',' ', 5],
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ',' ', 6],
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ',' ', 7],
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ',' ', 8],
  ];
  
  function printchess() {
      console.log(['  a ', 'b ', 'c ','d ', 'e ', 'f ','g ', 'h'].join(''))
    for (const row of chess) {
      const bar = row.join('|');
      console.log(bar);
      console.log(' -----------------');
     }}
  printchess()
  console.log(editchess)

  
 