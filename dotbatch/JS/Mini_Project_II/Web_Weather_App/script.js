// API ---> Application Programming Interface.

const API_KEY="f5575d93593b63774ec0b4f4220431a2";
async function showWeather(){
    let city="goa";
    // let latitude=15.3333;
    // let longitude=74.0833;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await response.json();
    console.log("Weather data:-> " , data);
    let newPara=document.createElement('p')
    newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`
    document.body.appendChild(newPara);

}

async function getCustomWeatherDetails(){
    try{
        let latitude=19.022;
        let longitude=18.3333;

        let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data=await result.json();
        console.log(data);
    }
   catch(err){
    console.log("Error found"+err);
   }
    
}






function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

    }else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;

    console.log(lat);
    console.log(longi);
}