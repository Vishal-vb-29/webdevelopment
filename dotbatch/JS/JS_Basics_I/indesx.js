console.log('external JS file code');
let a=5;
let b=10;
console.log('value of a :',a);

// let v/s var

// error 
// if(true){
//     let c=5;
//     console.log(c);
// }
// console.log(c);

if(true){
    var c=5;
    console.log(c);
}
console.log(c);