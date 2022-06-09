
const names = require('./names.json')
const fs=require("fs");
let Finalform=[];
const editNames =names.map(item=>item.split(','))


editNames.map(item=>{
    let total_price=+item[1]*+item[2]
    let template={product_name:item[0],
        total_price:item[1]*item[2]*(1-item[4].slice(0,-1)/100),
        //total_price:total_price,
        type:item[5],
        compound_name:item[0]+"-"+total_price
    }
    console.log(template);    
    Finalform.push(template);
    console.log(Finalform); 

});

fs.writeFile("./prodect.json", JSON.stringify(Finalform), function(err){
if(err)throw err;
console.log("Done");}
); 
