'use strict';

function myWeather(){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=goyang-si&appid=b1f992fd26b2991a5912c0e5bcbafba6&lang=kr";
    fetch(url)
        .then(rs => rs.json())
        .then(data => {
            drawWeather(data);
        });
}

function drawWeather(d){
    console.log(d);
    let temp = Number(d.main.temp) - 273.15;
    temp = temp.toFixed(2);
    
    document.getElementById("description").innerHTML = d.weather[0].description;
    document.getElementById("temp").innerHTML = temp + '&deg;';
    document.getElementById("location").innerHTML = d.name;
    document.getElementById("img").src = `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`
}

window.onload = () => myWeather();