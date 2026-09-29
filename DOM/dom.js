let p = document.querySelector("#text");
console.log(text);

let paras = document.getElementsByClassName("description");
console.log(paras);

let ids = document.getElementById("text");
console.log(ids);


ids = document.querySelectorAll("#text");
console.log(ids);

let container = document.querySelector(".container");
console.log(container.querySelector(".description"));

console.log(p.tagName);
p.innerText = "Lala";
console.log(container.innerText);

console.log(container.innerHTML);


//dom tree traversal
console.log(p.parentNode);
console.log(container.childNodes);
console.log(container.firstChild)
console.log(container.firstElementChild);
console.log(container.lastElementChild);


//acccing attrbutes

console.log(container.getAttribute("class"));
console.log(container.hasAttribute("style"));
container.setAttribute("style",  "background-color:red");

//accessing properties

container.style.backgroundColor = "green";
console.log(p.id);

//classname andclassList

container.classList.add("white");


//creating elements
let h4 = document.createElement("h4");
h4.innerText = "hello";
h4.style.backgroundColor = "red";
container.append(h4);

