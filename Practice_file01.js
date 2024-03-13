/*
Q1. Create a variable of type string and try to add number to it
*/

let str = "Jasmeet";
let ans = str+4;

console.log(ans);  // Concatenation
// Try to print datatype of ans

console.log(typeof(ans));   // string

// Create a const object in Javascript. Can you change it to hold a number later.

const student = {
    name:"Jasmeet",
    branch: "CSE",
    rollNo: 2001600
}
console.log(student);
student.rollNo = 2001678+1;
console.log(student);
student["Phone"]= 122344555;
console.log(student);

// Write a js program to create a word meaning dictionary of 5 words
const dict = {
    "detrimental":"something which is not good for you",
    "inquisitive":"curious",
    "gorgeous":"beautiful",
    "curious":"interested",
    "Brutal": "violent"
}
console.log(dict["detrimental"]);
console.log("Jas"+6);
console.log(5+4);
