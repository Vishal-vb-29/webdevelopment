console.log('lets start');
//Object create
let rectangle3 = {
    length: 1,
    breadth:2,

    draw: function(){
        console.log('drawing rectangle');
    }
};

// let rectangle1 = {
//     length: 1,
//     breadth:2,

//     draw: function(){
//         console.log('draw');
//     }
// }

// let rectangle2 = {
//     length: 1,
//     breadth:2,

//     draw: function(){
//         console.log('draw');
//     }
// }
 
//  Object creation 1. Factory Function : function to create a object.
// function createRectangle(){
//     return rectangle = {
//         length: 1,
//         breadth:2,
    
//         draw(){
//             console.log('draw');
//         }
//     };
// }
// let obj = createRectangle();
// console.log('Length of obj rectangle is : '+obj.length);


// function createRectangle(len,bre){
//     return rectangle = {
//         length:len,
//         breadth:bre,
    
//         draw(){
//             console.log('draw');
//         }
//     };
// }
// let rectangle1 =createRectangle(2,5);
// console.log(rectangle1);

// //  Object creation 2. Constructor Function : function to create a object.
// function Rectangle(){
//     this.length=1,
//     this.breadth=2,

//     this.draw=function(){
//         console.log('Drawing');  
//     }
// }

// // object creation using constructor function
// let rectangleObject=new Rectangle();


// // for-in loop
// for(let key in rectangle){
//     console.log(key,rectangle1[key]);
// }

// Check for the properties
if('length ' in rectangle3){
    console.log('Present');
}else{
    console.log('Absent');
}

// Object cloning
// 1.iteration
let a={value:10};
let b={};
for(let key in a){
    b[key]=a[key];
}
console.log(b);
 
let src={
    a:10,
    b:20,
    c:30
};
let dest={};
for(let key in src){
    dest[key]=src[key];
}
console.log(dest);
// 2.assign
let src1={
    a:10,
    b:20,
    c:30
}
let src2={
    d:10,
    e:20,
    f:30
}
let dest1=Object.assign({},src1,src2);
console.log(dest1);
src1.a++;
console.log(dest1);

// 3.spread
let src3={
    h:5,
    i:6,
    j:8
}
let dest4={...src3};
console.log(dest4);

// Date and time 
// Date : 5 ways to create date.
let date=new Date();
console.log(date);

let date2=new Date('June 20 1998 07:15');
console.log(date2);

let date3=new Date(1998, 6, 20, 7);
console.log(date3); 
// we can change year, month, time, date all also : with the help of getter and setter.
date3.setFullYear(1947);
date3.setMonth(4);
console.log(date3);

// Arrays - 1. Adding new element 2.Finding element 3.Removing element 4.Spliting element 5.Combining element 
// Creation
let numbers=[36,31,4,5,7];
console.log(numbers);
// Access
console.log(numbers[0]);

// 1. Insertion - a.end(push), b.begin(unshift), c.middle(splice)
numbers.push(9);
console.log('Adding 9 at the end '+numbers);
numbers.unshift(10);
console.log('Adding no 10 in the beggining '+numbers)
numbers.splice(4,0,'a','b','c','d');
console.log('Adding no in the middle '+numbers);

// 2. Searching
console.log(numbers.indexOf(7)); 
// a.we want to check if a number exist in an array indexOf
console.log(numbers.indexOf(4,2));
if(numbers.indexOf(14)!=-1)
console.log("present");
// b.include function
console.log(numbers.includes(7));
// Searching in reference types. is done with the help of Call back function
let courses=[{no:1,naam:'Love'},{no:2,naam:'Rahul'}];
console.log(courses);
console.log(courses.indexOf({no:1,naam:'Love'}));
console.log(courses.includes({no:1,naam:'Love'}));
// CallBack Function : is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// let course=courses.find(function(course){
//     return course.naam=='Love';
// })
// Shortform
let course=courses.find(course => course.naam=='Love');
console.log(course);  

// 3. Removing Element : a.end(pop) b.begining(splice )
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.splice(1,2);
console.log(numbers);  

// 4. Emptying an array
let numbers2=numbers;
// numbers.length=0;
numbers.splice(0,numbers.length);
console.log(numbers);
console.log(numbers2);

// 5.Combining and Slicing Array
// Combining arrays
let first=[1,2,3];
let second=[4,5,6];
let combined=first.concat(second);
console.log(combined);
// Combining array with spread operator
let combinedd=[...first,'s',...second];
console.log(combinedd);

// Create copy with spread operator
let another=[...combinedd];
console.log(another);

// Slicing
// Full Slicing : let sliced=combined.slice();
 let sliced=combined.slice(2,3);
 console.log(sliced); 

// Iterating an Array
// with for of loop
 let arr=[10,20,30,40,50];
 for(let value of arr){
    console.log(value);
 }

// Iterating array : For each loop
 arr.forEach(number=>console.log('Hey '+number)
 ); 

//  Sorting array
let numberr=[40,30,10,20,50];
numberr.sort();
console.log(numberr);
// reverse
numberr.reverse();
console.log(numberr);

// HW : How to sort arrays of objects in JS.
// Use predicate function to sort object


// Filtering arrays
let numberrr=[1,2,-1,-4];
let filtered=numberrr.filter(function(value){
    return value>=0;
});
console.log(filtered);

// Mapping Arrays : Maps each elements of array to something else
let numberrrr=[7,8,9,10];
let items=numberrrr.map(value=>'student_no'+value
);
console.log(items);

// Mapping with Objects
let array1=[1,2,-6,-9];
// let filtere=array1.filter(value=>value>=0);

// let items1=filtere.map(function(num){
//     return obj={value:num};
// })
// console.log(items1);

// Chaining
let items1=array1.filter(value=>value>=0).map(function(num){
    return obj={value:num}});
    console.log(items1);



