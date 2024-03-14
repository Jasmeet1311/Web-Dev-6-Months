async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}
// immediately invoked function expression
(async function main()  // function is immediately invoked using this syntax
{
    // let a= await sleep();
    // console.log(a);

    // let x,y =[4,5];
    // console.log(x,y);
    // In order to access x as 5 and y as 5 use syntax

    // Destructuring
    let [x,y] = [4,5];
    console.log(x,y);

    let [a,b, ...rest] =[11,23,4,4,8,5,6,6,66,7];
    console.log(a,b,rest); // rest will be printed as array

    // Destructuring in js
    let obj ={
        a1:1,
        b2:2,
        c3:3
    }
    let {a1,b2} = obj;
    console.log(a1,b2);
    // spread operator

    let arr =[1,2,3];  // spread the array
    console.log(...arr);
}
)()
