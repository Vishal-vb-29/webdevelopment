console.log('Entered in My website');
function eventFunction(){
    console.log('I have clicked on document');
}
// addEventListener() method to add th events.
document.addEventListener('click',eventFunction);
// RemoveEventListener() method removes the event
document.removeEventListener('click',eventFunction);

const content=document.querySelector('#wrapper');
// All information of event.
content.addEventListener('click',function(event){
    console.log(event);
});

// PreventDefault() method :
let links=document.querySelectorAll('a');
let thirdLink=links[2];
thirdLink.addEventListener('click',function (event){
    event.preventDefault();
    console.log('maza aaya accha laga');
});


// Avoid to many events
// let myDiv=document.createElement('div');
// for(let i=0;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para' + i;
//     newElement.addEventListener('click',function(event){
//         console.log('I have clicked on para');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// Optimized Code
let myDiv=document.createElement('div');
function paraStatus(event){
    console.log('I have clicked on para',event.target.textContent);
};
myDiv.addEventListener('click',paraStatus);
for(let i=0;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is para' + i;
    
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

// target property : returns the element where event occur
// let element1=document.querySelector('#wrapper1');
// element1.addEventListener('click',function(event){
//     console.log('span pr click kia hai '+ event.target.textContent);
// });

// NodeName propert helps to remove the above issue para and span both works when event occurs bbut we write only for span.

let element1=document.querySelector('#wrapper1');
element1.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN')
    console.log('span pr click kia hai '+ event.target.textContent);
});

// How do i know whole HTML is loaded or not
// go to website : Inspecct : Network and see
// DOM Content Loaded event is used in codew


