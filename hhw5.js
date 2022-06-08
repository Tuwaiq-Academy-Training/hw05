
const arr =require("./names.json")
const fs = require("fs");

const editnames=arr.map(item=>item.split(','))

let obj=[];
editnames.map(item=>{
  let total_price=+item[1]*+item[2] //to count
  let template={
    product_name:item[0],
    total_price:item[1]*[2]*(1-item[4]),
    totalprice:total_price,
    type:item[5],
    compound_name:item[0]+'-'+total_price
    
  }

  obj.push(template); //push the element to new array 
});

console.log(obj);
 // create new json file and store in it 
fs.writeFile("./product-list.json", JSON.stringify(obj), function(err){
  if (err) throw err;
  console.log('complete');
  }
);




  
 
  








