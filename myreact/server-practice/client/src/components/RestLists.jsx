import React from 'react';
import styled from 'styled-components';
import { ImageListItem } from '@mui/material';
import { LocationOnTwoTone } from '@mui/icons-material';
import { Roadview } from 'react-kakao-maps-sdk';

const ABlock = styled.div`
  margin: 15px 20px 10px;
  margin-bottom: 10px;
  display: flex;
  padding: 15px;
  border-bottom: 1px dashed #eee;
  &:hover{
    background: #fafcdf;
  }
`
const ImgItem =styled.div`
  flex: 0 0 30%;
`
const TypeBox = styled.div`
  flex: 0 0 60%;
  padding-left: 20px;
`
const AreaBox = styled.div`
  flex: 0 0 10%;
  align-self: center;
  padding-right: 40px;
`

const RestLists = ({rt, mapOnOff, setMapOnOff, location, setLocation}) => {
  let visible = mapOnOff && rt.latitude === location[0] && rt.longitude === location[1];
  return (
    <ABlock href="#">
      <ImgItem>
        {
          visible ?
          <Roadview 
            position={{lat: rt.latitude, lng: rt.longitude, radius: 100}} 
            style={{width: "220px", height: "180px"}}
          />
          :
          <img src="https://picsum.photos/220/180"/>
        }
      </ImgItem>
      <TypeBox>
        <h2>{rt.title}</h2>
        <p>{rt.title_food}</p>
        <p>{rt.tel}</p>
      </TypeBox>
      <AreaBox>
        <LocationOnTwoTone 
          sx={{fontSize: 40}}
          onClick={() => {
            setMapOnOff(!mapOnOff);
            setLocation([rt.latitude, rt.longitude]);
          }}
        />
      </AreaBox>
    </ABlock>
  )
}

export default RestLists