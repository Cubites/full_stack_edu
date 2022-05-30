import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const PostLink = styled.a`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  &:hover{
    background-color: #ddd;
    div:first-child{
      color: blue;
    }
  }
`
const EventName = styled.div`
  color: #333;
  font-weight: bold;
`
const EventPeriod = styled.div`
  color: #333;
`

const List = ({ eventList, postNum, pageNum }) => {
  let posts = [];
  let linktext = '';
  let startPostIndex = postNum * (pageNum - 1);
  let endPostIndex = startPostIndex + (eventList.length > postNum * pageNum ? 10 : eventList.length % 10);
  /* 
    API 데이터에 있는 홈페이지 링크 상태에 따른 3가지 상황 고려
    1. 링크 있는 경우
    2. 링크가 있는데 "http://"가 없어 링크의 기능을 못하는 경우
    3. 링크가 없는 경우 
  */
  for(let i = startPostIndex; i < endPostIndex; i++){
    if(typeof(eventList[i].HMPG_URL) !== 'object'){
      linktext = eventList[i].HMPG_URL[0] !== 'h' ? 'http://' + eventList[i].HMPG_URL : eventList[i].HMPG_URL;
    }else{
      linktext = '#';
    }
    // API 데이터에 링크가 없는 경우 새로고침을 막음
    posts.push(
      <ListGroupItem key={"post" + i} style={{padding: 0, marginLeft: '15%', marginRight: '15%'}}>
        {
          linktext === '#' ? 
          <PostLink href={linktext} id={i} onClick={e => {e.preventDefault(); alert("링크가 없습니다.")}}> 
            <EventName>{eventList[i].EVENT_NM_INFO}</EventName>
            <EventPeriod>{eventList[i].EVENT_PERD}</EventPeriod>
          </PostLink>
          : 
          <PostLink href={linktext} id={i}>
            <EventName>{eventList[i].EVENT_NM_INFO}</EventName>
            <EventPeriod>{eventList[i].EVENT_PERD}</EventPeriod>
          </PostLink>
        }
      </ListGroupItem>
    );
  }
  return (
    <ListGroup>
      {posts}
    </ListGroup>
  )
}

export default List