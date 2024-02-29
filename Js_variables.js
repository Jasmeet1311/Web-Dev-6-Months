// var a = 4;
// var b = 5; 
// var c ="jasmeet";    //string
// console.log(a + b);
// console.log( typeof c);// string
// console.log( typeof a);// number
// console.log( typeof b); // number

// const d = 3.1;
// d=d+1;   --->error -- assignment to the constant variable
// console.log(d);
// Variable name should not start with number
// Variable name can start with $,_
// var _var1= "t";   // valid name


// Variables can be declared with var const and let 
// var is globally scoped
// let is block scoped

// let a = 4;   // a has  global scope 
// console.log(a);
// {
//     let a =9;
//     console.log(a);   // a has local scope
// }  
// var b = 4;   // b is 4 
// {
//     var b =9;
//     console.log(b);   // b will be over written
// }  
// console.log(b);
// var allows redeclaration whereas let does not allow redeclaration
// const can't  be updated or redeclared

// Datatypes--> primitive data types and non-primitiove data types 
// primitive data types 
// numbers,strings,null, undefined, boolean

let ans = true;
let q = null;
let p;  // undefined
console.log(
    ans,p,q
);
// When a variable is declared but not initialized, or when a function does not return a value, the variable or the function’s result is undefined.
// It is often used to explicitly indicate that a variable or object property should have no value or no reference to any object.


console.log(null == undefined); // true    loose equality operator
// 0==false // true
console.log(null === undefined); // false   strict equality operator
// 0=== false // false

// non-primitive datatype - obj

// obj in javascript are key value pairs 

let obj ={
    name: "Jasmeet",
    age: 22,
    "Course id": 1234555
}
console.log(obj);
console.log(obj["Course id"]);
// obj.name= "sehaj"; // name has been overwritten
console.log(obj); 
obj["country"] ="London";
console.log(obj);



