import data  from './names.json';
var fs = require('fs');

 
let arrayOfObj = [];
let j=0;
for(let i=0;i<data.length;i++){
    let arr = data[i].split(",", 6);
    arrayOfObj[j++] ={
        product_name:arr[0],
        total_price: parseInt(arr[1]) * parseInt(arr[2])*(1-(parseInt(arr[4])/100)),
        type:arr[3],
        compound_name:arr[0]+'-'+ parseInt(arr[1]) * parseInt(arr[2])*(1-(parseInt(arr[4])/100))  
    }
}

fs.writeFile("./ product.json", JSON.stringify(arrayOfObj, null, 4), (err: any) => {
    if (err) {  console.error(err);  return; };
    console.log("File has been created");
});