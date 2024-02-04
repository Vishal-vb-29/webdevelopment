//adding 100 para
const t1=performance.now();
for(let i=1;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is Para '+i;
    document.body.appendChild(newElement);
}
const t2=performance.now();
console.log("This Took "+(t2-t1)+" ms");

// Optimized Code
const t3=performance.now();
let myDiv=document.createElement('div');
for(let i=1;i<=100;i++){
    let element=document.createElement('p');
    element.textContent='This is Para '+i;
    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4=performance.now();
console.log("This took "+(t4-t3)+" ms");

// Document Fragment : used to reduce the number of Repaint and reflow
let fragment=document.createDocumentFragment(); 
for(let i=1;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is Para '+i;
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);  // 1 Refolw : 1 Repaint 

// Single Threaded
function addPara(){
    let para=document.createElement('p');
    para.textContent='JS is single threaded';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para=document.createElement('p');
    para.textContent='Kya chal rha hai';
    document.body.appendChild(para);
}

addPara();
appendNewMessage();