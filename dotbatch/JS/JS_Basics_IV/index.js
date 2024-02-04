// Functions

// Function Declaration
function run(){
    console.log("Running");
}

// Function Call or Invoke
run();
// Hoisting : It is the process of moving function declaration to the top of file. - Jisse ki hum function ko declare krne k phle bhi call krwa skte .


//Function assignment - Hoisting cannot work in assign function.
// 1. Named function Assignment.
let stand=function walk(){
    console.log('walking');
};
// 2. Anonymous Function Assignment.
let stand2=function(){
    console.log('Anonymous walking');
};

let jump=stand;
// To call assigned function we need to call by its variable name.
stand();
jump();
stand2();

// Dynamic natture of JS on function - we can give less/more parameters to the function also no error .
function sum(a,b){
    return a+b;
}
console.log(sum(1));
console.log(sum(1,2,3));


// argument Object in JS
function sum2(a,b){
    // console.log(arguments);
    let total=0;
    for(let value of arguments)
    total+=value;
    return total; 
}
let ans=sum2(1,2,3,4,5,6);
console.log(ans);

// Rest Operator (...) : 
function sum3(...args){
    console.log(args);
}
// We cannot write any argument after rest parameter otehrwise Error
// function sum3(num1,num2,...args,num3){
//     console.log(args);
// }
// RESt parameter must be last formal parameter.
sum3(1,2,4,5,6,7);

// Default parameter
function interest(p,r=6,y=10){
    return p*r*y/100;
}
console.log(interest(1000,));
// agr humne ek ko default bna diya to usk baad saare parameters ko default banana pdega.
// function interest(p,r=6,y){}   we cannot do this otherwise error.

// Getter : access properties.
// Setter : change or mutate properties.
let person={
    fName:'Love',
    lName:'Babbar',
    // Getter
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    // Setter  
    set fullName(value){ 
        if(typeof value !== String){
            throw new Error("You have not sent a string");
        }
        let parts=value.split(' ');
        this.fName= parts[0];
        this.lName= parts[1];
    }
};
// person.fullName='Rahul Kumar';


// Exception handling : try,throw and catch. 
try{
    person.fullName=1;
}
catch(e){
    // alert('You have sent a number in fullName');
    alert(e);
}
console.log(person.fullName);

// Reducing an array
let arr=[1,2,3,4];
let total=0;
for(let value of arr)
total+=value;
console.log(total);

// Reduce() function   : Accumulator (total), currValue(value loop)
let totalSum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log("Printing Total Sum : ");
console.log(totalSum);

