let usernme = "siri";
usernme = "backend developer";
console.log(usernme);
const pi = 3.14;
//pi = 3.14159;
console.log(pi);
let username = "siri";
let age = 25;
let isloggedin = true;
let cartitems = null;
let address;
let user = {name:"siri", age: 25 };
console.log(typeof username);
console.log(typeof age);
console.log(typeof isloggedin);
console.log(typeof cartitems);
console.log(typeof address);
console.log(typeof  user);
let greeting ="hello backend";
console.log(greeting.toUpperCase());
console.log(greeting.slice(0,5));
console.log(greeting.split(""));
console.log(greeting.split(" "))
console.log(greeting.split("e"))
// template literals
let myname = "siri";
console.log(`hello, ${myname}! welcome to backend.`);
//symbol- hiding from colllapsing keys
let id1= Symbol("id");
let id2= Symbol("id");
console.log(id1==id2);
// symbol -explicit usage
let myuser={
    usrname:"siri",
    age: 25
};
let secretkey = Symbol("id");
myuser[secretkey] = 12345;
console.log(myuser);
//bigint - finance niche
console.log(Number.MAX_SAFE_INTEGER);
let big =  9253654758697991n;
console.log(big+2n);
//bigint - cant mix with normalnum
let bignum=10n; // bigint=money(real life)
let normalnum=5;
console.log(bignum+BigInt(normalnum)); // money+5n
//concat
let str1="hello";
let str2="backend";
let str3="world";
let result = str1.concat(" ",str2," ",str3);
console.log(result);
// original strings don't change 
let combined = str1.concat(" ",str2);
console.log(combined);
let uresult = str1+" "+ str2;
console.log(uresult);
// real life 
// array- users,prdcts,apiresults
//  ecommerce cart
let cart = ["laptop","phone","headphones"];
cart.push("mouse");
console.log(cart[0])
cart.forEach((item,index) => console.log(`${index}: ${item}`));
//  symbol  - latge framwrks/librars(react)
const ID = Symbol("id");
let auser ={
    name:"siri",
    [ID]:12345
};
console.log(auser[ID]);
//  strings
// to upppercase/lowercase - normalise user input
let email = "User@example.com";
console.log(email.toLowerCase());
//slice()-extract substrings
let token = "bearer avc123456789";
console.log(token.slice(7));
// split-parsing csv,logs,user  input
let tags = "node.js,backend,javscript";
console.log(tags.split(","));
// trim - cleaning user  input
let kusername=" siri ";
console.log(kusername.trim());
// includes - searching input 
let bio = "i love js";
console.log(bio.includes("js"));
// replace - formatting strings
let template = "hello,NAME";
console.log(template.replace("NAME","siri"));
//  practice
let miname="sriraja";
let miage=20;
let micity="hyd";
console.log(" hi,i'm "+`${miname}`+`${miage}`+" years old,from "+ `${micity}`)
// arrays - holds llists of data 
// push - add item - end 
let fruits = ["apple", "banana"]
fruits.push("mango");
console.log(fruits);
// pop -remove last item 
let fruitis = ["apple","banana","mango"];
let last = fruitis.pop();
console.log(last);
console.log(fruitis);
//map - transform - new array 
let numbers =[ 1,2,3];
let thripled = numbers.map(n => n*3)
console.log(thripled);
//filter - only items-match condition
let nummbers = [1,2,3,4,5];
let even = nummbers.filter(n => n%2 ===0);
console.log(even);
// reduce- reduce array - single value
let numbbers= [1,2,3,4,5];
let sum = numbbers.reduce((total, n) => total + n,0);
console.log(sum);
// another example
let caart = [
    {name: "apple",price:5,qty:3},
    {name: "orange",price:15,qty:2},
    {name: "headphones",price:50,qty:1}
];
let totalprice = caart.reduce((total,item) => {
    return total + item.price*item.qty;
},0);
console.log("total price:", totalprice);
//objects -key value pairs
let usser ={
    name:"siri",
    age:22,
    email:"siri@example.com"
};
console.log(usser.name);
console.log(usser["email"]);
console.log(Object.keys(usser));
console.log(Object.values(usser));
// task
let fruiits = ["apple","orange","kiwi","jack","mango"];
fruiits.map(fruiit => console.log(fruiit));
const useer ={
    name:"alex",
    age:22,
    city:"ny",
}
console.log(`${useer.name}lives in ${useer.city}`);
// conditionals
let aage = 18;
if (aage < 13){
    console.log("you are a child");
}else if(aage < 18){
    console.log("your'e a teenager");
}else{
    console.log("you're an adult");
}
//  switch
let fruit = "apple";
switch(fruit){
    case "apple" :
        console.log("apples are red");
        break;
        case "banana":
            console.log("banana");
            break;
            case "orange":
                console.log("oranges")
                break;
                default:
                    console.log("unknown fruit");
}
//loops
//for
for(let i=1;i<=5;i++){
    console.log("count:",i);
}
//  while
let i= 1;
while(i<=5){
    console.log("numeber:",i);
    i++;
}
// for...of
let fruuits = ["apple","mango","orange"];
for(let fruuit of fruuits){
    console.log(fruuit);
}
// true vs false
//  false,0,"",null,undefined,nan
if("hello"){
    console.log("this runs cuz truth");
}if(0){
    console.log("this will not run");
 //feature-practice-functions
}
// functions
// regular function
function greet(name){
    return "hello, "+ name;
}
console.log(greet("alice"));
// arrow function
const greeet = (name) => {
    return "hello, " + name;
}
console.log(greeet("bob"));
// function parameters
// default-w/o
function multiply(a,b){
    return a * b;
}
console.log(multiply(5,2));
console.log(multiply(5));
// with- default
function multiply(a,b=1){
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5,3));
const multiplly = (a,b=1) => a*b ; // arrow
// return- values
function add(a,b){
    return a+b;
}
console.log(add(2,3));
// no return
function sayhi(){
    console.log("say hi u mf");
}
console.log(sayhi());
// arrow functions
//expplicit
const aadd = (a,b) => {
    return a+b;
}
// implicit
const adadd = (a,b) => a+b;
// task
function abdd(a,b){
    return a+b;
}console.log(abdd(5,7));
function isEven(n){
    return n%2===0;
}console.log(isEven(4));
function reversestring(str){
    return str.split("").reverse().join("");
}console.log(reversestring("siri"));
// split-reverse-join
// task
for(let i=1;i<=20;i++){
    // i-3&5-fizzbuzz
    if(i%3===0 && i%5===0){
        console.log("fizzbuzz");
    }else if(i%3===0) {
        console.log("fizz");
    }else if(i%5===0){
        console.log("buzz");
    }else{
        console.log(i);
    }}
}

