//String declaration 

var str = "hello";
str = new String("Hello worlds");
str = String(123);
console.log(str);


str = "hello";
var str2 = new String("hello");
console.log(str === str2);


//string methods 


str = "Hello world";
console.log(str.charCodeAt(1));

console.log(str.charAt(2));
console.log(str.includes("w"));
console.log(str.startsWith("H"));
console.log(str.endsWith("d"))
console.log(str.indexOf("l",4));
console.log(str.slice(-5,-1));
console.log(str.split(""));