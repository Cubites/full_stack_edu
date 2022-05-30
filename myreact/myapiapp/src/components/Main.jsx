import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import key from '../key.json';
import List from './List';
import Paging from './Paging';

const Main = () => {
  const [postNum, setPostNum] = useState(10); // 한 페이지에 표시할 행사 갯수
  const [pageNum, setPageNum] = useState(1); // 현재 페이지 번호
  const [eventList, setEventList] = useState([]); // API로 불러온 행사 목록
  const [totalPage, setTotalPage] = useState(1); // (전체 행사 수 / 한 페이지에 표시할 행사 수)를 올림한 수, 전체 페이지 수
  useEffect(() => {
    fetch(`https://openapi.gg.go.kr/KintexEventFixatn?key=${key.key}&type=json&pIndex=1&pSize=120`)
      .then(response => response.json())
      .then(rs => {
        setEventList(...eventList, rs.KintexEventFixatn[1].row);
        setTotalPage(Math.ceil(rs.KintexEventFixatn[1].row.length / postNum));
      });
  }, []);
    
  return (
    <Container className='mt-5'>
      <h1 className='text-center mb-4'>킨텍스 행사 목록</h1>
      {/* 데이터를 아직 불러오지 않은 경우 행사 목록 component가 나오지 않게 막음 */}
      {(eventList.length !== 0) && <List eventList={eventList} postNum={postNum} pageNum={pageNum}/>}
      <Paging pageNum={pageNum} setPageNum={setPageNum} totalPage={totalPage} />
    </Container>
  )
}

export default Main