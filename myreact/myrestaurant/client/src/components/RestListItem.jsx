import React, { useState, useEffect } from 'react';
import { Roadview, Map } from 'react-kakao-maps-sdk';
import { ListGroupItem, Row, Col } from 'reactstrap';
// import Map from './Map';
// import rest from '../json/rest.json';

const RestListItem = (props) => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [radius, setRadius] = useState('');
  useEffect(() => {
    setLat(props.latitude);
    setLon(props.longitude);
    setRadius(props.radius);
  })
  return (
    <ListGroupItem className='py-4 px-4'>
      <Row>
        <Col xs="4">
          <Roadview // 로드뷰를 표시할 Container
            position={{
              // 지도의 중심좌표
              lat: lat,
              lng: lon,
              radius: radius,
              // lat: props.latitude,
              // lng: props.longitude,
              // radius: props.radius
            }}
            style={{
              // 지도의 크기
              width: "100%",
              height: "250px",
              border: "2px solid #ddd",
              borderRadius: "20px"
            }}
          />
        </Col>
        <Col xs="5">
          <h2>{props.title}</h2>
          <p>{props.sigun}</p>
          <p>{props.tel}</p>
          <p>{props.title_food}</p>
          <p>주소 <br/> ({props.zip})<br/>[도로명주소] {props.address} <br /> [지번주소] {props.address_old}</p>
        </Col>
        <Col xs="3">
          {/* <Map lat={props.latitude} lng={props.longitude} /> */}
          <Map 
            center={{
              lat: lat,
              lng: lon
              // lat: props.latitude,
              // lng: props.longitude
            }}
            style={{
              width:"250px",
              height:"200px",
              border: "1px solid #ddd",
            }}
            level={3}
          />
        </Col>
      </Row>
    </ListGroupItem>
  )
}

export default RestListItem