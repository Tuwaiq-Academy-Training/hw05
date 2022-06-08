const names = require("./names.json")
 const fs = require('fs');



const newNames = names.map(item => item.split(",")) 
let finalform = []

newNames.map(item => {
    let total_price=+item[1]*+item[2]
    let tamplate ={
        productName:item[0],
        total_price:item[1]*[2]*(1-item[4]),
        total_price:total_price,
        type:item[5],
        compoundName:item[0]+'-'+total_price
    }
     console.log(tamplate);

    const informatin = JSON.stringify(tamplate);

fs.writeFile('product.json', informatin, (err) => {
    if (err) {
        throw err;
    }
    console.log("Json Done in Product,json.");
});
})