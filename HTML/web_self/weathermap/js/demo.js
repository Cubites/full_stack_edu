'use strict';

function myWeather(local){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=b1f992fd26b2991a5912c0e5bcbafba6&lang=kr`;
    fetch(url)
        .then(rs => rs.json())
        .then(data => {
            drawWeather(data);
            weatherColor(data);
        });
}

function drawWeather(d){
    let temp = Number(d.main.temp) - 273.15;
    temp = temp.toFixed(1);
    
    document.getElementById("description").innerHTML = d.weather[0].description;
    document.getElementById("temp").innerHTML = temp + '&deg;';
    document.getElementById("location").innerHTML = d.name;
    document.getElementById("img").src = `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`
}

function weatherColor(d){
    let icon = d.weather[0].icon;
    fetch("../json/db.json")
        .then(rs => rs.json())
        .then(data => {
            let color = data.weather[0]["04d"];
            document.getElementsByTagName('body')[0].style.backgroundColor = color;
        })
}

function date(){
    let weekKR = ['일요일', '월요일', '화요일', '수요일', '목요일','금요일', '토요일'];
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    let day = date.getDate();
    let week = date.getDay();
    let month = date.getMonth() + 1;
    let dayOutput = `${month}월 ${day}일 ${weekKR[week]} ${hour}:${min}`;
    document.getElementById("day").innerHTML = dayOutput;
}

function preWeather(localLat, localLon, time, index){
    const url = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${localLat}&lon=${localLon}&dt=${time}&appid=b1f992fd26b2991a5912c0e5bcbafba6`
    fetch(url)
        .then(rs => rs.json())
        .then(data => {
            preWeatherInner(data, index);
        })
}
function preWeatherInner(d, index){
    let preTemp = d.current.temp;
    let preIcon = d.current.weather[0].icon;
    let jsonIcon = '../json/db.json';
    document.getElementsByClassName("temp")[index].innerHTML = (preTemp - 273.15).toFixed(1) + '&deg;';
    fetch(jsonIcon)
        .then(rs => rs.json())
        .then(data => {
            document.getElementsByClassName("weatherIcon")[index].innerHTML = data.weatherIcon[0][preIcon];
        })
}

window.onload = () => {
    myWeather('goyang-si');
    date();
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth();
        let day = time.getDate();
        let today = parseInt(new Date(year, month, day).getTime() / 1000);
        console.log(year, month, time);
        for(let i = 0; i < 5; i++){
            document.getElementsByClassName("day")[i].innerHTML = `${month + 1}월 ${day - 1 - i}일`;
            preWeather(lat, lon, today - (86400 * i), i);
        }
    });
};