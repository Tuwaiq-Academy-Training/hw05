const names = require('./names.json')

const editiedNames = names.map(item=>item.split(','))
let finalForm=[]

editiedNames.map(item=>{
    let total_price=+item[1]*+item[2]*(1-(+item[4].slice(0,-1)/100)) 
    let template = {
        product_name:item[0],
        total_price:total_price,
        type:item[5],
        compound_name:item[0]+'-'+total_price
    }
    finalForm.push(template);
    
});

console.log(finalForm);