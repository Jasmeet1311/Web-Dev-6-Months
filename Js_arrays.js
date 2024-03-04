let arr = ["Jasmeet",45,undefined,89,9.76,true,0];
// console.log(arr);
// console.log(arr.length);
// console.log(typeof arr); // object
// console.log(arr[2]);
arr[2] = 78888;   // arrays are mutable
// console.log(arr);

//  Array methods
// let a = arr.toString();    // converts array to string
// console.log(a, typeof a);

// let b = arr.join("and");  // joins the array with 'and' returns a string
// console.log(b,typeof b);

// arr.pop();  // removes the last element
// console.log(arr);

// arr.push("new");  // adds new element at last
// console.log(arr);

// let c = arr.shift();   // removes first element and returns it.
// console.log(c,arr);

// let d = arr.unshift("first");  // adds new element at the beginning and returns the length of the string
// console.log(d,arr);

// delete arr[0];   // delete the elemt at the specified index

// let a1 =[1,2,3];
// let a2 =[4,22,23];
// let a3 =[0,6655,457];
// let a4=a1.concat(a2,a3);   // used to concatenate arrays returns a new array does not change the existing ones
// console.log(a4);
// a4.sort();   // modifies the original array
// console.log(a4);

// let num =[1,2,3,4,5,5,6,6,6,7,6,78,454,23];
// let r =num.splice(2,4);  // deletes 4 elements from index 2 and returns the deleted lements array.
// console.log(num,r);

// let n =num.slice(2,6);
// console.log(num,n); // slice the array from index 2 till n-1 that is 5


//  Using loops with arrays

// let num =[1,2,3,4,5,5,11];
// num.forEach(element => {
//     console.log(element ** 2);
// });
// num.forEach((value,index,arr) =>{
//     console.log(value,index,arr);
// });
// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
//     }
// }

// for (const iterator of num) {
//     console.log(iterator ** 2);
// }

// Map filter and reduce
// Map - returns a new array after performing some operations on each element of an array
// let num1= [1,2,3,4,89,545,2,0];
// num1.map((value,index,arr)=>{
//     console.log(value ** 2);
//     console.log(arr,index);

// })

//  Filter - filters the element which passes a certain test condition
// num1.filter((value,index)=>{
//     if(value > 5){
//         console.log("Index is"+index,"and value is "+value);
//     }
// })

//  reduce function reduces array to a single number
let num2 =[1,2,3]
const red =(a,b)=>{
    return a*b;
}
let ans =num2.reduce(red);
console.log(ans);









