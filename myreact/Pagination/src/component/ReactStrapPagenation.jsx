import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'

const ReactStrapPagenation = ({ pageNum, setPageNum, pageMax }) => {
  const item = [];
  const pageMove = (num) => {
    setPageNum(num);
  }
  const minPage = Math.floor(pageNum / 10) * 10;
  const maxPage = pageMax - minPage >= 10 ? minPage + 10 : minPage + pageMax % 10 + 1
  console.log(minPage, maxPage);
  for(let i = minPage; i < maxPage; i++){
    if(i == pageNum){
      item.push(<Pagination.Item key={i} onClick={() => pageMove(i)} active>{i+1}</Pagination.Item>)
    }else{
      item.push(<Pagination.Item key={i} onClick={() => pageMove(i)}>{i+1}</Pagination.Item>)
    }
  }

  return (
    <Pagination className='justify-content-center mt-2'>
      <Pagination.First onClick={() => setPageNum(0)} />
      <Pagination.Prev onClick={() => setPageNum(pageNum - 1)} />
      {item}
      <Pagination.Next onClick={() => setPageNum(pageNum + 1)} />
      <Pagination.Last onClick={() => setPageNum(pageMax)} />
    </Pagination>
  )
}

export default ReactStrapPagenation