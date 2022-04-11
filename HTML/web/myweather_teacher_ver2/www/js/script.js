'use strict';

let myLat = 0, myLng = 0;
const search = document.getElementsByClassName("search")[0];
const searchBox = document.getElementsByClassName("searchBox")[0];

search.addEventListener("click", function(){
   searchBox.classList.add("active");
   document.getElementById("search").focus();
});

document.getElementById("search").addEventListener("blur", function(){
   searchBox.classList.remove("active");
});

//위치값 받아오기
if(navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position){
       myLat = position.coords.latitude;
       myLng = position.coords.longitude;
       getWeather(myLat, myLng, '');
   });
}

function getWeather(lat, lon, city){
   const url = "https://api.openweathermap.org/data/2.5/forecast";
   const apikey = "61817fe9871c5ce196a7b67a92ce3a6b";
   let mydata;
   if(city == '') {
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

   let params = Object.keys(mydata).map(key => key + '=' + mydata[key]).join('&');
   //console.log(params);   
  
   

   fetch(`${url}?${params}`)
   .then( reson => reson.json())
   .then( rs => {
      console.log(rs);
      /*
         1.도시명  2.시간  3.아이콘  4.현재온도
         5.최저온도, 최고온도  6.description
         7. 해뜨는 시각 8. 해지는 시각  9. 바람
         10. 습도  11. 구름  12.체감온도 
      */

       document.getElementsByClassName('city-title')[0].innerHTML = "💒 "+rs.city.name.toUpperCase();
       let nowTime = new Date(rs.list[0].dt*1000);  //<-- 유닉스타임을 시간으로 변환하는 방법
       let nowDate = nowTime.getFullYear() + "년 " + (parseInt(nowTime.getMonth()) + 1) +"월 " + nowTime.getDate() + "일 " + nowTime.getHours() + "시";
       document.getElementsByClassName('ntime')[0].innerHTML = nowDate;
       console.log(document.getElementById('iconbox').children[0].src);
       document.getElementById('iconbox').children[0].src = "images/"+rs.list[0].weather[0].icon+".svg";
       document.getElementById("nowtemp").innerHTML = rs.list[0].main.temp.toFixed(0) + "&deg; ";
       let temp_minmax = rs.list[0].main.temp_min.toFixed(1) + "&deg; / " + rs.list[0].main.temp_max.toFixed(1) + "&deg;";
       document.getElementById('minmaxtemp').innerHTML = temp_minmax;
       /* 시간 */
       console.log("아이콘", rs.list[0].weather[0].icon);
       /* 해뜨는 시각 */
       let sunriseTime = new Date(rs.city.sunrise*1000);
       let sunsetTime = new Date(rs.city.sunset*1000);
       
       let sunrise = `${sunriseTime.getHours()}: ${sunriseTime.getMinutes()}`;
       let sunset = `${sunsetTime.getHours()}: ${sunsetTime.getMinutes()}`;
       document.getElementById('sunrise').innerHTML = sunrise;
       document.getElementById('sunset').innerHTML = sunset;
       document.getElementById('wind').innerHTML = rs.list[0].wind.speed + 'm/s';
       document.getElementById('cloud').innerHTML = rs.list[0].clouds.all + '%';
       document.getElementById('humidity').innerHTML = rs.list[0].main.humidity + '%';
       document.getElementById('feelslike').innerHTML = rs.list[0].main.feels_like + "&deg;";
	   
	   
	               let html = "";
            for(let i in rs.list){
                let dateTime = new Date(rs.list[i].dt*1000);
                let dayHours = formatAMPM(dateTime.getHours());
                let dayDate = `${nowTime.getMonth() +1}월 ${nowTime.getDate()}일 ${dayHours}시`;
                let day_temp = `${rs.list[i].main.temp_max.toFixed(1)}&deg;/ ${rs.list[i].main.temp_min.toFixed(1)}&deg;`;
                let day_desc = rs.list[i].weather[0].description;
                html += `
                <li>
                    <div class="dayWeather swiper-slide">
                        <p class="daydate">${dayDate}</p>
                        <img src="images/${rs.list[i].weather[0].icon}.svg" alt="01d">
                        <p class="daytemp">${day_temp}</p>
                        <p class="daydesc">${day_desc}</p>
                    </div>
                </li>
                `;
            }
            document.getElementById('swiper').innerHTML = html;
   });
}

function formatAMPM(hours){
    let ampm = hours > 12 ? hours - 12 : hours;
    return hours >= 12 ? `PM ${ampm}` : `AM ${ampm}`;
}


const wrapper = document.getElementById("wrapper");
const swiper = document.getElementById("swiper");
let left_w = wrapper.getBoundingClientRect().left;  //전체페이지에서 wrapper의 왼쪽 위치
let hei_w = wrapper.offsetHeight; //wrapper 의 높이  200px
let wei_w = wrapper.offsetWidth; //wrapper의 넓이 
let len_s = swiper.children.length; 

//swiper의 넓이
console.log(len_s);
let ul=0; //ul태그 위치 
let now=0; //정지했을 때의 위치 
let prev=0; //이동 방향
let left_s = 0;
let order;
wrapper.addEventListener('touchmove', startSlider, false);
wrapper.addEventListener('touchend', endSlider, false);


function startSlider(e){  
   prev = e.touches[0].clientX - left_w;
   if(prev > now) {
       ul += 10;
   }else{
       ul -= 10;
   }
   moveSlider();
   now = prev;

}
function endSlider(){
   let width_w = swiper.offsetWidth - wei_w;
   console.log(width_w);
   if(ul > 0) { ul = 0; }
   if(ul < -width_w) { ul = -width_w; }
   moveSlider();
}
function moveSlider() {
    swiper.style.transform = `translateX(${ul}px)`;
}


/*
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
 
      case "01n":
       wcs = "wi-night-clear"; 
       bk = true;
      break;           
      case "02n":
         wcs = "wi-night-alt-cloudy"; 
         bk = true;
        break; 
        case "03n":
         wcs = "wi-cloud";
         bk = true;
        break; 
        case "04n":
         wcs = "wi-cloudy"; 
         bk = true;
        break; 
        case "09n":
         wcs = "wi-showers";
         bk = true; 
        break; 
        case "10n":
         wcs = "wi-rain";
         bk = true; 
        break;  
        case "11n":
         wcs = "wi-thunderstorm";
         bk = true; 
        break; 
        case "13n":
         wcs = "wi-snowflake-cold";
         bk = true; 
        break; 
        case "50n":
         wcs = "wi-fog";
         bk = true; 
        break;
       }
        viewIcon[0] = wcs; 
        if(bk){
           viewIcon[1] = "linear-gradient(rgb(7, 99, 168), rgb(5, 47, 80))";
        }
    return viewIcon;
 }
 */