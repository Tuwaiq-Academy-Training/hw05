const chess_board=require('../selution1.js')
console.log(chess_board);
const chessB=require('../chessBoardStates.json')
let spl=(chessB.game1.split('/'));
const l=spl.map(item=>item.split(''));
console.log(l);
color={
    black:'black',
    white:'white'
}


function Spaces(){
    let s='-';
        for (let i=0;i<8;i++){
            if(l[i][i]==Number){
                chess_board.push(s);
            }
            else {
                chess_board.push(...l);
            }

}  //chess_board();
      }

Spaces();
