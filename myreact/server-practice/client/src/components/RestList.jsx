import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import RestLists from './RestLists';

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
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ListItem>
            <TopList>
              옵션
            </TopList>
            <RestLists />
          </ListItem>
        </Grid>
        <Grid item xs={4}>
          <Item>테스트</Item>
        </Grid>
      </Grid>
    </>
  )
}

export default RestList