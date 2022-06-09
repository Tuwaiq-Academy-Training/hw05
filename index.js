 const names = require("./names.json")
 const fs = require('fs');

 
 

const newNames = names.map(item => item.split(",")) 
let finalform = []

newNames.map(item => {
    let total_price=+item[1]*+item[2]
    let new1 ={
        productName:item[0],
        total_price:item[1]*[2]*(1-item[4]),
        total_price:total_price,
        type:item[5],
        compoundName:item[0]+'-'+total_price
    }
     console.log(new1);

    const data = JSON.stringify(new1);

fs.writeFile('product.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
})


