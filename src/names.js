const names=require('../names.json')
//console.log(name);
const dest=names.map(item=>item.split(','));
//console.log(dest);
 //dest.map(item=>console.log(item[0]));
 

 let finalForm=[];
 dest.map(item=>{
     total_price=+item[1]*+item[2]*+(1-item[4].slice(0,-1)/100);
let updates={
    product_name:item[0],
    total_price:total_price,
    type:item[3],
    compoun_name:item[0]+'-'+total_price}
finalForm.push(updates);
 });
// console.log(finalForm);

//
let myFile =JSON.stringify({finalForm});
console.log(JSON.stringify({finalForm}));
