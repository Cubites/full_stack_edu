import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paging = ({ pageNum, setPageNum, totalPage }) => {
  let pageNums = [];
  // 현재 페이지 번호에만 active 추가 
  for(let i = 0; i < totalPage; i++){
    if(i + 1 === pageNum){
      pageNums.push(<Pagination.Item key={i} onClick={() => setPageNum(i + 1)} active>{i+1}</Pagination.Item>);
    }else{
      pageNums.push(<Pagination.Item key={i} onClick={() => setPageNum(i + 1)}>{i+1}</Pagination.Item>);
    }
  }
  const movePage = (way) => {
    if(way === -1){
      setPageNum(pageNum - 1 < 1 ? 1 : pageNum - 1);
    }else{
      setPageNum(pageNum + 1 > totalPage ? pageNum : pageNum + 1)
    }
  }
  return (
    <Pagination className='justify-content-center mt-2'>
      <Pagination.First onClick={() => setPageNum(1)}/>
      <Pagination.Prev onClick={() => movePage(-1)}/>
        {pageNums}
      <Pagination.Next onClick={() => movePage(1)}/>
      <Pagination.Last onClick={() => setPageNum(totalPage)}/>
    </Pagination>
  )
}

export default Paging