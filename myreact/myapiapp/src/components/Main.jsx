import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import key from '../key.json';
import List from './List';
import Paging from './Paging';

const Main = () => {
  const [postNum, setPostNum] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [eventList, setEventList] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    fetch(`https://openapi.gg.go.kr/KintexEventFixatn?key=${key.key}&type=json&pIndex=1&pSize=120`)
    .then(response => response.json())
    .then(rs => {
      console.log("1 .불러온 데이터 (rs): ", rs.KintexEventFixatn[1].row);
      setEventList(...eventList, rs.KintexEventFixatn[1].row);
      console.log("2. eventList에 데이터 삽입");
      console.log("3. 데이터 삽입 후 data 출력 : ", eventList);
      console.log("4. 데이터 삽입 후 data 타입 출력 : ", typeof(eventList));
      setTotalPage(Math.ceil(rs.KintexEventFixatn[1].row.length / postNum));
    });
  }, []);
  console.log("5. ", eventList);
    
  return (
    <Container className='mt-5'>
      {(eventList.length !== 0) && <List eventList={eventList} postNum={postNum} pageNum={pageNum}/>}
      <Paging pageNum={pageNum} setPageNum={setPageNum} totalPage={totalPage} />
    </Container>
  )
}

export default Main