# HW05

## Guidelines 
all these exercises must be done in node files

### Json Formatter

given many strings with the format of "itemName,Price,Quantity,Description,tax_percent,type"
you can import them from the file names.js as an Array.

we need these information to be seprated into an object type format, so we could use it for other uses 
(like displaying them in a web page), write a program that takes many strings and transforms them into 
a Json File with the following structure.
```javascript
{
    product_name:itemName,
    total_price:Price*Quantity*(1-tax_percent)
    type:type
    compound_name:itemName-total_price
}
```

#### Bonus
Write the output file into the same directroy as product.json (you may use any packages for this)

### Chess Board Visualizer

In chess Programming to represent a board state at any given moment there's format called FEN string board 
representation string it works as follows:
Lowercase letters describe the black pieces, "p" stands for pawn, "r" for rook, "n" for knight, "b" for bishop, 
"q" for queen, and "k" for king. The same letters are used for the white pieces, but they appear in uppercase
Empty squares are denoted by numbers from one to eight, depending on how many empty squares are between two pieces.

so for example 
this String:  
"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"    
Gives us the following board

![Chess Starting Board](https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pdrpnht/phprLkH4s.png)

and this String:  
"r1b1k1nr/p2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1."  
Gives us the following board  

![Chess Complex Board](https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pdrpnht/phpffYq5N.png)


using the previous application from HW02 (you can change it to become more general, 
but please import it from another file and use it in this exercise)
use that board implementation to extend it's functionality to interpret 
the string and print the correct board state on the board.

to check your solution import the chessBoardStates.json for more example games

for more info the FEN format, check out this [link](https://www.chess.com/terms/fen-chess)
