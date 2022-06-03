import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import RestLists from './RestLists';
import axios from 'axios';
import { Map } from 'react-kakao-maps-sdk';

const Item = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  height: 400px;
`
const ListItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  position: relative;
  height: auto;
  padding-top: 35px;
`
const TopList = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #ddd;
  background: #dedede;
  position: absolute;
  padding: 5px 15px;
`


const RestList = () => {
  const [mapOnOff, setMapOnOff] = useState(false);
  const [location, setLocation] = useState([0, 0]);
  const [rest, setRest] = useState([]);
  useEffect(() => {
    axios.get('/api/server-practice')
      .then(dt => setRest(...rest, dt.data));
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ListItem>
            <TopList>
              옵션
            </TopList>
            {
              rest.map(rt => 
                <RestLists 
                  key={rt.id} 
                  rt={rt} 
                  mapOnOff={mapOnOff} 
                  setMapOnOff={setMapOnOff} 
                  location={location}
                  setLocation={setLocation}
                />
              )
            }
          </ListItem>
        </Grid>
        <Grid item xs={4} style={{position: 'relative'}}>
          <Item style={{position: 'fixed', width: '20%'}}>
            {
              mapOnOff ? 
              <Map
                center={{lat: location[0], lng: location[1]}}
                style={{width: "100%", height: "100%"}}
                level={3}
              />
              : 
              <div style={{width: "100%", height: "100%", textAlign: "center", lineHeight: "400px", verticalAlign: "middle"}}>
                가게를 선택하면 지도가 나타납니다.
              </div>
            }
          </Item>
        </Grid>
      </Grid>
    </>
  )
}

export default RestList