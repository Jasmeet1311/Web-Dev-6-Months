function add(a,b,c=1){
    // C is a default argument
    console.log(a,b,c);
    return a+b+c;
}
// let ans = add(3,3,2);
// console.log(ans);
let ans1 = add(2);
console.log(ans1);    //output NaN  (Not a number) bcz b io undefined

// Arrow function
const func = (a)=>{
    console.log("This is an arrow function "+ a);
}
func(3);