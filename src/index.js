 const Array =require('../names.json')
 let sen
 let sen_arr
    let i=0
    while(i<Array.length){
    sen=String(Array[i]) 
    i++;
        sen_split=sen.split(',')
    // sen_arr=[sen_split]
    console.log(` itemName is ${sen_split[0]} and the price ${sen_split[1]} and the quantity ${sen_split[2]} and description ${sen_split[3]} and tax_percent ${sen_split[4]} and the type ${sen_split[5]} `)
    let  total_price=parseInt( (sen_split[1])*(sen_split[2])*(1-sen_split[4]))
   
     console.log(`total price ${sen_split[0]}  = ${total_price}`)
}  

// console.log(Array)

  