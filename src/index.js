const names=require('../names.json');

const editItem=names.map(item=>item.split(',')) ;
//console.log(editItem);
let finalForm=[];
//editItem.forEach(item=>{
//let total_price=+item[1]*+item[2]*+(1-item[4].slice(0,-1));

editItem.forEach(item=>{
    let total_price=+item[1]*+item[2]*+(1-item[4].slice(0,-1)/100);
    let template={
    product_name:item[0],
    total_price:total_price,
    type:item[3],
    compound_name:item[0]+'-'+total_price
}
finalForm.push(template);
});


console.log(finalForm);

//finalForm.push(template)
//console.log(finalForm);