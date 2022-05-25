import React from 'react';
import { Roadview } from 'react-kakao-maps-sdk';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import Map from './Map';

const RestList = () => {
  return (
    <Container>
      <h1 className="text-center my-5"> 경기도 맛집 리스트 </h1>
      <ListGroup>
        <ListGroupItem className='py-4 px-4'>
          <Row>
            <Col xs="4">
              <Roadview // 로드뷰를 표시할 Container
                position={{
                  // 지도의 중심좌표
                  lat: 37.6820421,
                  lng: 126.7535498,
                  radius: 50,
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
              <h2>정통중화요리 남궁</h2>
              {/* <p>고양시</p> */}
              <p>031-911-3072</p>
              <p>대표 메뉴 : 해물고추짬뽕, 양장피</p>
              <p>주소 <br/> [도로명주소] (10367) 경기도 고양시 일산서구 일산로 682 <br /> [지번주소] 경기도 고양시 일산서구 대화동 2101번지</p>
            </Col>
            <Col xs="3">
              <Map lat={37.6820421} lng={126.7535498} />
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <h2>정통중화요리 남궁</h2>
          <p>고양시</p>
          <p>031-911-3072</p>
          <p>해물고추짬뽕, 양장피</p>
          <p>(10367) 경기도 고양시 일산서구 ... <br /> 경기도 고양시 ...</p>
        </ListGroupItem>
        <ListGroupItem>
          <h2>정통중화요리 남궁</h2>
          <p>고양시</p>
          <p>031-911-3072</p>
          <p>해물고추짬뽕, 양장피</p>
          <p>(10367) 경기도 고양시 일산서구 ... <br /> 경기도 고양시 ...</p>
        </ListGroupItem>
      </ListGroup>
    </Container>
  )
}

export default RestList