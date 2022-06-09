const arr  = require("./names.json");
const editnames = arr.map(item => item.split (','))
editnames.map(item =>{
    let total_price=+item[1]*+item[2];
     let template = {
      product_name:item[0],
      total_price:item[1]*[2]*(1-item[4]),
      total_price:total_price,
      type:item[5],
      compound_name:item[0]+'-'+total_price
    }
  })
 console.log(template) 