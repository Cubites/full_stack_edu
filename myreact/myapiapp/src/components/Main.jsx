import React from 'react';
import key from '../key.json';

const Main = () => {
  console.log(key.keys[1].key);
  fetch(`http://api.incheoneasy.com/api/tour/nationVisitorList?accessToken=${key.keys[1].key}&statYm=202101`)
  // fetch('https://openapi.gg.go.kr/KintexEventFixatn?key=cf6a588af1314b99918cbf66d690b38d&type=json')
    .then(response => response.json())
    .then(rs => console.log(rs));
  return (
    <div>Main</div>
  )
}

export default Main