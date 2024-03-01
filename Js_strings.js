let str = "Jasmeet";
// String index starts from 0
// String is immutable
console.log(str);
console.log(str[1]);
console.log(str[8]);  // won't give any error  output -> undefined
// Js was made to run in browser so it tries to through less errors
console.log(str.length);

// Template literal 
console.log(`${str} is a good student`); // string interpolation
// Inside backticks you can use both double and single quotes

// Basic string functions

console.log(str.toUpperCase());   
console.log(str.toLowerCase());   
console.log(str.slice(1,4));   // 4 is not included 
//  It will print upto index 3
console.log(str.slice(1));   // Will print from index 1 till end
let str1= str.concat(" is a good girl good   ");
console.log(str1);

let str2=str1.replace("good","bad");   // only 1st occurance will be replaced
console.log(str2);
 
let a ="                 jkhudhou uiwhsuihpi    loshaolpijhisaj     lahsihioasipj;jm;i"
console.log(a);
let b = a.trim();
console.log(b);