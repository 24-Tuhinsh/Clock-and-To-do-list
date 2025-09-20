
// 1. Ways to print in js
console.log("Hello world")
alert("me")
document.write("This is document write")
// 2. js console API
console.log("hello world", 4 + 6, "Another log")
console.warn("this is a warning")
console.error("This is an error")

// 3. js variable
// variables - containers to store data values
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// 4. datatypes in js
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = 'This is a string';

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.9087
}
console.log(num1);
console.log(num2);
console.log(str1);
console.log(str2);
console.log(marks);

// Booleans
var a = true
var b = false
console.log(a, b)
var und
console.log(und)

var n = null;
console.log(n);
// At a very high level , there are two types of data types i n js
//  1.primitive data types : undefined,null,number,string,boolean,symbol
// 2.refrence data types : Arrays and objects
var arr = [1, 2, "string", 3, 4, 5]
console.log(arr)

// Operators in javaScript
var a = 34;
var b = 56;
console.log("The value of a+b is", a + b);
console.log("The value of a+b is", a - b);
console.log("The value of a+b is", a / b);
console.log("The value of a+b is", a * b);

// Assingment Operators
var c = b;
c *= 2;
console.log(c);

// Compresion opreators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// Logical Operators
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Logical Not
console.log(! false);
console.log(! true);

function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2)

// Conditionals in java
// var age=78;
// if (age>8) {
//     console.log('you are not a kid');

// } else {
//     console.log('you are a kid');

// }
// if (age>40) {
//     console.log('Age is >40');

// } 
// else if(age>20){
// console.log('age is >20');

// }
// else {
//     console.log('not known');

// }
// console.log('Loop ended');
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach(function (element) {
    console.log(element);

})
// let j=0;
// const ac=1;
// ac=ac+1;
// while (j<arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// let j=10;
// do {
//     console.log(arr[j]);
//     j++;
// }
// while(j<arr.length);

for (var i = 0; i < arr.length; i++) {
    if (i==2) {
        // break;
        continue;
    }
    console.log(arr[i]);
}
let myarr=["fan","camera",34,null,true];
// Array Methods
myarr.pop();
myarr.push("harry")
myarr.shift();
const newLen = myarr.unshift("harry");
console.log(newLen);
console.log(myarr.length);

// String methods in js
let mylovelyString="harry is a good boy good ";
console.log(mylovelyString.length);
console.log(mylovelyString.indexOf("good"));
console.log(mylovelyString.lastIndexOf("good"));
console.log(mylovelyString.slice(1,3));
d=mylovelyString.replace("harry","rohan");
console.log(d,mylovelyString);

let myDate= new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());

//DOM Manipulation
let elem=document.getElementById('click');
console.log(elem);
let elemclass = document.getElementsByClassName("container")
console.log(elemclass);
// elemclass[0].style.background="yellow"
elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success")
// elemclass[0].classList.remove("text-success")
console.log(elem.innerHTML);
console.log(elem.innerText);

console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);
tn=document.getElementsByTagName('div')
console.log(tn);
createdElement=document.createElement('p')
createdElement.innerText="This is a created para"
tn[0].appendChild(createdElement)
createdElement2=document.createElement('b')
createdElement2.innerText="This is a created bold"
tn[0].replaceChild(createdElement2, createdElement)
// removeChild(element)------> removes an element
sel=document.querySelector('.container')
console.log(sel);
sel=document.querySelectorAll('.container')
console.log(sel);

// js event
function clicked() {
    console.log('The button was clicked');
    
}
window.onload=function () {
    console.log('The document was loaded');
    
}
firstContainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked </b>"
console.log('clicked on container');

})
// firstContainer.addEventListener('mouseover',function(){
// console.log('mouse on container');

// })
// firstContainer.addEventListener('mouseout',function(){
// console.log('mouse out container');

// })
// firstContainer.addEventListener('mouseup',function(){
// console.log('mouse up when container is clicked container');

// })
// firstContainer.addEventListener('mousedown',function(){
// console.log('mouse down when container is clicked');

// })

// Arrow functions
// function sum(a,b) {
//     return a+b;
// }
 sum = (a,b)=> {
    return a+b;
}
// SetTimeout and setinterval
logkaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> Set Interval Fired </b>"
    console.log('I am your log');
    
}
clr=setTimeout(logkaro,2000);
// clr=setInterval(logkaro,2000);

// js local storage
// localStorage.setItem("name","Tuhinsh")
// undefined
// localStorage.getItem("name")
// 'Tuhinsh'

// json
obj={name : "harry" ,length : 1, a:{this : 'th"at'}}
json=JSON.stringify(obj)
console.log(json);
console.log(typeof json);
parsed=JSON.parse(`{"name" : "harry" ,"length" : 1, "a":{"this" : "that"}}`)
console.log(parsed);

// Template Literals - Backtics
