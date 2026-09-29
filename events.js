
let btn  = document.querySelector("#changeText");
// btn.onclick = function(e){
//   console.log("clicked");
//   btn.innerHTML = "Clicked"
// }

// btn.onclick = function(e){
//   console.log("Clicked from 2 function")
// }

const handler = (e)=>{
  e.target.innerHTML = "clicked";
}
btn.addEventListener("click" , handler);
btn.removeEventListener("click" , handler);



