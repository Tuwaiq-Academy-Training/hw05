const chessStates=require('../chessBoardStates.json');


const editItem=chessStates.game1.split('/')
const seprateIndex=editItem.map(item=>item.split(''));

/*arr =['a','b','c','d','e','f','g','h'];
      function arrSpace(){
              const l= arr.join(  ' -') ;
                  console.log(l);

      }*/
      //1-use 2D array for chess board
      
      const chessBoard=[
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ];
     /* function printBoard(){
        for(const rows of chessBoard)
        {const line = rows.join('  | ' ) ;
                console.log(line);
                console.log('-------------------------------------');
         }
        }
*/
 function printBoard(){
        for(const rows of chessBoard)
        {const line = rows.join('  | ' ) ;
                console.log(line);
                console.log('-------------------------------------');
                
        } 
     
    }

    function putItemsInSpace(){
    
    
        for (let i=0;i<8;i++){
            let s=' '
            if(seprateIndex[i][i]==Number){
                chessBoard.push(s);
            }
            else {
                chessBoard.push(...seprateIndex);
            }
                
}  printBoard();
      }
     
    putItemsInSpace();


        //arrSpace();
         
        
 
  