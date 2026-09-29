var arr = [1,2,3,4];
var arr2 = new Array(1,2,3,4);
console.log(arr == arr2);


arr = Array.from({length:5} , (_,i)=>i);
console.log(arr);
arr = new Array({length:5}).fill(1);
console.log(arr);


//methods

arr = [1,2,3,4,5];
console.log(arr.slice(1,3));

console.log(arr.splice(1,2,99,99))
console.log(arr);

arr2 = [1,2,3,4,5,6,7];
console.log(arr.concat(arr2));
console.log(typeof(arr.join("-")));


var ans = arr.filter((val ,idx , arr)=>{
  return val>4;
})

console.log(ans);

arr = [1,2,3,4,5];
let [a,b,c] = arr;
console.log(a,b,c);

arr = [1,2,[3,5]];
let [w,x,[y,z]] = arr;
console.log(w,x,y,z);



//objecs

var obj = {
  a:1,
  b:2
}
let newObj = {...obj , c:3}
console.log(newObj);

console.log(Object.keys(obj))
console.log(Object.values(obj));
console.log(Object.entries(obj));
Object.freeze(obj);

obj.a = 10;
console.log(obj);
console.log(obj.hasOwnProperty("a"))

let obj2 = {...obj};



let obj3 = {
  name:"Vijay",
  adsress:{
    home:"Lamachaur",
    work:"Haldwani"
  }
}

let {name , address:{home , work}} = obj3;
console.log(name , address);