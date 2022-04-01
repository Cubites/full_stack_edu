'use strict';

let myLat, myLng;
const search = document.getElementsByClassName("search")[0];
const searchBox = document.getElementsByClassName("searchBox")[0];
search.addEventListener("click", function(){
    searchBox.classList.add("active");
    document.getElementById("search").focus();
});
document.getElementById("search").addEventListener("blur", function(){
    searchBox.classList.remove("active");
})

// 위치값 받아오기
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
        getWeather(myLat, myLng, "");
    });
}

function getWeather(lat, lon, city){
    const url = "https://api.openweathermap.org/data/2.5/forecast";
    const apikey = "b1f992fd26b2991a5912c0e5bcbafba6";
    let mydata;
    console.log(city);
    if(city == ''){
        mydata = {
            lat: lat,
            lon: lon,
            appid: apikey,
            units: 'metric',
            lang: 'kr'
        }
    }else{
        mydata = {
            q: city,
            appid: apikey,
            units: 'metric',
            lang: 'kr'
        }
    }
    // key=value&key
    let params = Object.keys(mydata).map(key => key + '=' + mydata[key]).join('&');
    console.log(params);
    // fetch(url, {
    //     method: 'post',
    //     cache: 'none',
    //     headers: {
    //         'content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: new URLSearchParams(mydata)
    // })
    fetch(`${url}?${params}`)
        .then(reson => reson.json())
        .then(rs => {
            console.log(rs);
            /*
            1.도시명 2.시간 3.아이콘 4.현재온도
            5.최저온도, 최고온도 6.설명
            7. 해뜨는 시각 8.해지는 시각 9.바람
            10.습도 11.구름 12.체감온도
            */
            console.log("도시명", rs.city.name);
            let nowTime = new Date(rs.list[0].dt*1000);
            console.log(nowTime);
            console.log("시간", new Date().getTime());
            console.log("아이콘", rs.list[0].weather[0].icon);
            console.log("현재온도", rs.list[0].main.temp);
            console.log("최저온도", rs.list[0].main.temp_max);
            console.log("최고온도", rs.list[0].main.temp_min);
            console.log("설명", rs.list[0].weather[0].description);
            console.log("해뜨는 시각", rs.city.sunrise);
            console.log("해지는 시각", rs.city.sunset);
            console.log("바람", rs.list[0].wind.speed);
            console.log("습도", rs.list[0].main.humidity);
            console.log("구름", rs.list[0].clouds.all);
            console.log("체감온도", rs.list[0].main.feels_like);
        })
}


function wicon(icon){
    let wcs;
    let bk = false;
    let viewIcon = new Array();
    switch(icon){
        case "01d":
            wcs = "wi-day-sunny";
            break;
        case "02d":
            wcs = "wi-day-cloudy";
            break;
        case "03d":
            wcs = "wi-cloud";
            break;
        case "04d":
            wcs = "wi-cloudy";
            break;
        case "09d":
            wcs = "wi-showers";
            break;
        case "10d":
            wcs = "wi-rain";
            break;
        case "11d":
            wcs = "wi-thunderstorm";
            break;
        case "13d":
            wcs = "wi-snowflake-cold";
            break;
        case "50d":
            wcs = "wi-fog";
            break;
        case "01d":
            wcs = "wi-day-sunny";
            break;
        case "02d":
            wcs = "wi-day-cloudy";
            break;
        case "03d":
            wcs = "wi-cloud";
            break;
        case "04d":
            wcs = "wi-cloudy";
            break;
        case "09d":
            wcs = "wi-showers";
            break;
        case "10d":
            wcs = "wi-rain";
            break;
        case "11d":
            wcs = "wi-thunderstorm";
            break;
        case "13d":
            wcs = "wi-snowflake-cold";
            break;
        case "50d":
            wcs = "wi-fog";
            break;
        
        case "01n":
            wcs = "wi-day-sunny";
            break;
        case "02n":
            wcs = "wi-day-cloudy";
            break;
        case "03n":
            wcs = "wi-cloud";
            break;
        case "04n":
            wcs = "wi-cloudy";
            break;
        case "09n":
            wcs = "wi-showers";
            break;
        case "10n":
            wcs = "wi-rain";
            break;
        case "11n":
            wcs = "wi-thunderstorm";
            break;
        case "13n":
            wcs = "wi-snowflake-cold";
            break;
        case "50n":
            wcs = "wi-fog";
            break;
    }
}