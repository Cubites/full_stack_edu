import React, { useEffect } from 'react'

const {kakao} = window;

const Map = ({ lat, lng }) => {
  const mapscript = () => {
    let mapContainer = document.getElementById('map');
    let mapOption = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3
    }
    let map = new kakao.maps.Map(mapContainer, mapOption);
    let markerPosition = new kakao.maps.LatLng(lat, lng);
    let marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }
  useEffect(() => {
    mapscript();
  })
  return (
    <div id="map" style={{ width: "100%", height: "250px"}}></div>
  )
}

export default Map