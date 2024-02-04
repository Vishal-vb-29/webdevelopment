// Sync example o/p : first  second
function sync(){
    console.log('first');
}
sync();

console.log('Second');

// async example  o/p : first second third
setTimeout(function(){
    
        console.log('third');
    
},3000);
function sync(){
    console.log('first');
}
sync();

console.log('Second');


// Promise
// let meraPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise');
//     },5000);
//     // resolve(2233);
//     reject(new Error('Bhaisahab Error aaye hai'));
// });
// console.log('Pehla'); 

// Promise then(value) & catch(error) method
let meraPromise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('I am inside Promise1');
    },5000);
    // resolve(22330)
    reject('Error')
});
meraPromise1.then((value)=>{console.log(value)},(error)=>{console.log('Received error 1')});

let meraPromise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('I am inside Promise2');
    },3000);
    reject(new Error('Error Aagya'))
    
});
meraPromise2.catch((error)=>{console.log('Received error 2')});
console.log('Pehla'); 

// Multiple Promises
let waadaa1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('setimeout1 started');
    },2000);
    resolve(true);
})
waadaa1.then(()=>{
    let waadaa2=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('setimeout2 started');
        },3000);
        resolve("waadaa 2 resolved");
    })
    return waadaa2;
}).then((value)=>{console.log(value)}); 
  

// Async-await :  Async function()
async function abcd(){
    console.log("Hello");
    return 7;
}

async function utility0(){
    let maharastraMausam=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Maharastra me grami hai");
        },1000);
    });
    let hydMausam=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hyderabad is cool");
        },5000);
    });
}


// Get Fetch API
let obj={
    heading:"head",
};
async function utility(){
    let content=await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log(content);
}
utility();

// POST fetch API
async function helper(){
    let options={
        method:'POST',
        body:JSON.stringify({
            title:'Vishal',
            body:'Acchi body hai',
            userId:1,
        }),
        headers:{
            'Content-type':'application/json', charset:'UTF-8',},
        };
        let content=fetch('https://jsonplaceholder.typicode.com/posts',options);
        let response = content.json();
        return response;
    }
    async function utility1(){ 
        let ans=await helper();
        console.log(ans);
    }
    utility1();




// Clousers
//let -> block scope
function init(){
    var name="Mozilla";
    function displayName(){
        console.log(name);
        }
        displayName();
    }
init();


