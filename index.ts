
//const names = require('./names.json')
import names from './names.json';
const edittiedName = names.map(item=>item.split(','))

//console.log(edittiedName);
let final =[];

edittiedName.map(item=>{
  let total_price=+item[1]*+ item[2]// to be contunurd
   let template = {
    product_name:item[0],
    total_price:+ item[1]*+ item[2]*(1-+item[4].split(0,-1)/100),
    type:item[5],
    compound_name:item[0]+ '-'+ total_price,

   }
});
console.log(template);
final.push(template);
console.log(final);





