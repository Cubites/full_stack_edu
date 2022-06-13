import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'reactstrap';
import { Outlet, Link } from 'react-router-dom';
import RestListItem from './RestListItem';
// import rest from '../json/rest.json';
import axios from 'axios';

const RestList = () => {
  const [rest, setRest] = useState([]);
  useEffect(() => {
    console.log('데이터 호출 전');
    axios.get('/api/myrestaurant')
      .then(rs => {
        console.log('데이터 저장 전');
        setRest(...rest, rs.data);
        console.log('데이터 저장 후');
      })
  }, []);
  return (
    <Container>
      <h1 className="text-center my-5"> 경기도 맛집 리스트 </h1>
      <div className="text-right mb-">
        <Link to="/write" className='write'>글쓰기</Link>
        <Outlet />
      </div>
      <ListGroup>
        {
          rest.map(c => (
            <RestListItem
              key={c.id}
              id={c.id} 
              sigun={c.sigun} 
              title={c.title}
              tel={c.tel}
              title_food={c.title_food}
              zip={c.zip}
              address={c.address}
              address_old={c.address_old}
              latitude={c.latitude}
              longitude={c.longitude}
              radius={c.radius} 
            />
          ))
        }
      </ListGroup>
    </Container>
  )
}

export default RestList