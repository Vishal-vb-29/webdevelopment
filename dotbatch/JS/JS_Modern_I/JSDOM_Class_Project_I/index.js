const countValue=document.querySelector('#counter');
const increment=()=>{
    // Get the value from UI
    let value=parseInt(countValue.innerText);
    // Update the value
    value++;
    // Set the value onto UI
    countValue.innerText=value;
}

const decrement=()=>{
    // Get the value from UI
    let value=parseInt(countValue.innerText);
    // Update the value
    value--;
    // Set the value onto UI
    countValue.innerText=value;
}