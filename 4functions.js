//function declaration and expressions
abcd(10,11);
function abcd(a,b){
  console.log(arguments);
  console.log("htllo");
  console.log(a,b);
}




var fn = function (){
  console.log("fn wala function");
}

let arrow = (a,b)=>{
  console.log("arrrow function ")
  
}

arrow(12,13);


function abcde(a,fn){
  console.log(a);
  fn();
}


abcde(10 , function(){
  console.log("Calback function");
});


function higher(){
  return function(){
    console.log("hi");
  }
}

let ans = higher();
ans();


  function outer(){
    let count = 0;
    count ++;
    console.log(count);

    function inner(){
      count++;
      console.log(count);
    }
    inner();
  }

  outer();


  (function(){
    console.log("Hellow");
  }())

  let count = 1;
  function pure(a,b){
    return a+b;
  }

 ans  =  pure(10,20);
console.log(ans)

function impure(a,b){
    console.log(a+b+count);
}

impure();

function currings(a){
  return function(b){
    return function(c){
      console.log( a+b+c);
    }
  }
}

currings(10)(20)(30);

































