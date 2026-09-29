

console.log(this === window);

function abcd(){
  console.log(this);
}
abcd()


const arrow = ()=>{
  console.log(this);
}

arrow();

const obj = {
  name :"vijay",
  fn: function(){
    console.log(this.name);
  },

  ar:()=>{
    console.log("this is arrow function ")
    console.log(this);
    console.log(this.name);
  }
}

obj.fn();
obj.ar();


let newObj = {
  name:"Vijay"
}
function CallFn( a,b){
  console.log(this.name);
  console.log(a,b)
}

CallFn.call(obj ,10,30);


function applyfn(a,b){
  console.log(this);
  console.log(a,b);
}

applyfn.apply(obj , [10,20]);

let newfn = applyfn.bind(obj , 10,20);
newfn();