'use strict';

// 검색창 열기
const search = document.getElementsByClassName("search")[0];
const searchBox = document.getElementsByClassName("searchBox")[0];
let cityname = document.getElementsByClassName("city-title")[0];

search.addEventListener("click", function(){
    searchBox.classList.add("active");
    document.getElementById("search").focus();
});

document.searchForm.addEventListener("keydown", (e) => {
    let searchtxt = '';
    if(e.code === "Enter"){
        e.preventDefault();
        searchtxt = document.getElementById("search").value;
        searchBox.classList.remove("active");
        getWeather('', '', searchtxt, swiperWid);
        searchtxt = document.getElementById("search").value = "";
    }
})

// document.getElementById("search").addEventListener("blur", function(){
//     let search = document.getElementById("search");
//     searchBox.classList.remove("active").value;
//     console.log(search);
//     // getWeather('', '', search, swiperWid);
// })

// 위도 경도 or 도시 이름 값을 받아 날씨 출력
function getWeather(lat, lon, city, callback){
    const url = "https://api.openweathermap.org/data/2.5/forecast";
    const apikey = "b1f992fd26b2991a5912c0e5bcbafba6";
    let mydata;
    // console.log(city);
    if(city == ''){
        mydata = {
            lat: lat,
            lon: lon,
            appid: apikey,
            units: 'metric',
            lang: 'kr'
        }
    }else{
        cityname.innerHTML = `💒 ${city}` 
        mydata = {
            q: city,
            appid: apikey,
            units: 'metric',
            lang: 'kr'
        }
    }
    // key=value&key
    let params = Object.keys(mydata).map(key => key + '=' + mydata[key]).join('&');
    fetch(`${url}?${params}`)
        .then(reson => reson.json())
        .then(rs => {
            let nowTime = new Date(rs.list[0].dt*1000);
            document.getElementById("ntime").innerHTML = `${nowTime.getMonth() +1}월 ${nowTime.getDate()}일 ${formatAMPM(nowTime.getHours())}시 ${nowTime.getMinutes()}분`;
            document.getElementById("nowtemp").innerHTML = `${rs.list[0].main.temp.toFixed(0)}&deg;`;
            document.getElementById("minmaxtemp").innerHTML = `${rs.list[0].main.temp_max.toFixed(1)}&deg;/ ${rs.list[0].main.temp_min.toFixed(1)}&deg;`;
            document.getElementById("desc").innerHTML = rs.list[0].weather[0].description;

            let sunriseTime = new Date(rs.city.sunrise*1000);
            let sunsetTime = new Date(rs.city.sunset*1000);
            let sunrise = `${sunriseTime.getHours()} : ${sunriseTime.getMinutes()}`;
            let sunset = `${sunsetTime.getHours()} : ${sunsetTime.getMinutes()}`
            document.getElementById("sunrise").innerHTML = sunrise;
            document.getElementById("sunset").innerHTML = sunset;

            document.getElementById("wind").innerHTML = `${rs.list[0].wind.speed.toFixed(1)}m/s`;
            document.getElementById("humidity").innerHTML = rs.list[0].main.humidity;
            document.getElementById("cloud").innerHTML = rs.list[0].clouds.all;
            document.getElementById("feelslike").innerHTML = rs.list[0].main.feels_like.toFixed(0) + "&deg;";
            let html = "";
            for(let i in rs.list){
                let dateTime = new Date(rs.list[i].dt*1000);
                let dayHours = formatAMPM(dateTime.getHours());
                let dayDate = `${nowTime.getMonth() + 1}월 ${nowTime.getDate()}일`;
                let day_temp = `${rs.list[i].main.temp_max.toFixed(0)}&deg;/ ${rs.list[i].main.temp_min.toFixed(0)}&deg;`;
                let day_desc = rs.list[i].weather[0].description;
                html += `
                <li>
                    <div class="dayWeather swiper-slide">
                        <p class="daydate">${dayDate}</p>
                        <p class="ampmtime">${dayHours}시</p>
                        <img src="images/${rs.list[i].weather[0].icon}.svg" alt="01d">
                        <p class="daytemp">${day_temp}</p>
                        <p class="daydesc">${day_desc}</p>
                    </div>
                </li>
                `;
            }
            document.getElementById('swiper').innerHTML = html;
            callback();
        })
}

// 오전 오후 표기
function formatAMPM(hours){
    let ampm = hours > 12 ? hours - 12 : hours;
    return hours >= 12 ? `PM ${ampm}` : `AM ${ampm}`;
}

// 일기예보 슬라이드
const wrapper = document.getElementById("wrapper");
const swiper = document.getElementById("swiper");
let len_s = swiper.children.length * swiper.children[0].offsetWidth;
let wid_s = swiper.offsetWidth;
let max_move = 0; // swiper의 넓이

function swiperWid(){
    len_s = swiper.children.length * swiper.children[0].offsetWidth;
    wid_s = swiper.offsetWidth;
    max_move = wid_s - len_s; // swiper의 넓이
    // console.log(len_s, wid_s);
    // console.log(max_move);
}

let ul = 0; // ul태그 위치 
let now = 0; // 정지했을 때의 위치 
let prev = 0; // 이동 방향
let left_s = 0;
wrapper.addEventListener('touchmove', startSlider, false);
wrapper.addEventListener('touchend', endSlider, false);


function startSlider(e){  
    prev = e.touches[0].clientX;
    left_s = swiper.getBoundingClientRect().left;
    if(prev > now) {
        ul += 10;
    }else{
        ul -= 10;
    }
    moveSlider();
    now = prev;
}
function endSlider(){
    if(left_s > 0) {
        swiper.style.transform = `translateX(0px)`;
        ul = 0;
    }else if(left_s < max_move){
        swiper.style.transform = `translateX(${max_move}px)`;
        ul = max_move;
    }
}
function moveSlider() {
    swiper.style.transform = `translateX(${ul}px)`;
}

/***** 위치값 받아오기 *****/
let myLat, myLng;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
        getWeather(myLat, myLng, "", swiperWid)
    });
}