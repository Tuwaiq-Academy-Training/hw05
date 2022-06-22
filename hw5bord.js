
const bord =require("./chessBoardStates.json")

let  game = [bord.game1, bord.game2, bord.game3];

let thebord = [
  [' ', ' ', ' ',' ',' ',' ',' '],
  [' ', ' ', ' ',' ',' ',' ',' '],
  [' ', ' ', ' ',' ',' ',' ',' '],
  [' ', ' ', ' ',' ',' ',' ',' '],
  [' ', ' ', ' ',' ',' ',' ',' '],
  [' ', ' ', ' ',' ',' ',' ',' '],
  [' ', ' ', ' ',' ',' ',' ',' '],
  [' ', ' ', ' ',' ',' ',' ',' '],
]


///print the game bord 
function printGame() {
    for (const row of thebord) {
      const line = row.join(' | ');
      console.log(line);
      console.log('--------------------------');
    
    }
  }

function start (array){
  for(let i=0;i<thebord.length;i++)  {

    for(let k=0;k<thebord.length;k++){
      if(array[i][k] === 'P'|| array[i][k] === 'p' || array[i][k] === 'R' || array[i][k] === 'r' || array[i][k] === 'N' || array [i][k]=== 'n' || array[i][k] === 'B' || array [i][k] === 'b' || array [i][k] === 'Q' || array [i][k] === 'q' || array [i][k]=== 'K' || array [i][k]=== 'k')
         
     { thebord[i][k]=array[i][k]}
     else {
      thebord[i][k]=" "
     }     

  }
}
}
  
///start the game
for(let g=0; g<game.length;g++){
    let array = (Object.values(game[g]));
   //console.log(array)
    console.log('*************************************')
    start(array);
    printGame();

}






