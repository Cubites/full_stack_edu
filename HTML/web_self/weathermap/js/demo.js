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
let weekKR = ['일요일', '월요일', '화요일', '수요일', '목요일','금요일', '토요일'];

function date(){
    let date = new Date();
    let todaySec = parseInt(date.getTime() / 1000);
    let min = date.getMinutes();
    let hour = date.getHours();
    let day = date.getDate();
    let week = date.getDay();
    let month = date.getMonth() + 1;
    document.getElementById("day").innerHTML = `${month}월 ${day}일 ${weekKR[week]} ${hour}:${min}`;
}

function preWeather(){
    navigator.geolocation.getCurrentPosition((pos) => {
        const url = "https://api.openweathermap.org/data/2.5/forecast";
        let mydata = [
        {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            appid: "b1f992fd26b2991a5912c0e5bcbafba6"
        },{
            q: "goyang-si",
            appid: "b1f992fd26b2991a5912c0e5bcbafba6"
        }
        ]
        
        let params = Object.keys(mydata[0]).map(key => key + "=" + mydata[0][key]).join("&");
        fetch(`${url}?${params}`)
            .then(rs => rs.json())
            .then(data => {
                let preday = document.getElementsByClassName("day");
                console.log(data);
                for(let i = 0; i < 3; i++){
                    let predayValue = new Date(data.list[i].dt * 1000);
                    const month = predayValue.getMonth() + 1;
                    const day = predayValue.getDate();
                    const hour = predayValue.getHours();
                    preday[i].innerHTML = `${month}월 ${day}일 ${hour}시`;
                    preWeatherInner(data, i);
                }
            })
    });
}
function preWeatherInner(d, index){ 
    let preTemp = d.list[index].main.temp;
    let preIcon = d.list[index].weather[0].icon;
    let jsonIcon = '../json/db.json';
    document.getElementsByClassName("temp")[index].innerHTML = (preTemp - 273.15).toFixed(1) + '&deg;';
    let iconLink = "http://openweathermap.org/img/w/";
    document.getElementsByClassName("weatherIcon")[index].src = iconLink + preIcon + ".png";
}

window.onload = () => {
    myWeather('goyang-si');
    date();
    preWeather();

    document.getElementById("openSearch").onclick(() => {
        // document.getElementById("searchWindow").animate(
        //     {
        //         left: 100%
        //     },
        //     {

        //     }
        // )
    })
};