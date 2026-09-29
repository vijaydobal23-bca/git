
// spread operators 
let arr = [1,2,3,4,5];
console.log(...arr);
let arr2 = [6,7,8,9];
let arr3  = [...arr , ...arr2];
console.log(arr3);

const obj1 = {a:1 , b:2};
const obj2 = {...obj1 , c:3}
console.log(obj2);

//functional arguments 

function sum(...num){
  console.log(arguments)
}


sum(...arr);


//tupe conversion 
console.log(Number(" "));
console.log(Number(""));
console.log(parseInt("12a"));
console.log("10"< "9");