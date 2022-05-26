import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const PostLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;

  &:hover{
    background-color: #ddd;
  }
`

const List = ({ eventList, postNum, pageNum }) => {
  let posts = [];
  console.log("6. eventList in List", eventList);
  for(let i = 0; i < postNum; i++){
    posts.push(
      <ListGroupItem key={"post"+ i}>
        <PostLink>
          {eventList[i].EVENT_NM_INFO}
        </PostLink>
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