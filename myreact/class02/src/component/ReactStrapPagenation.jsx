import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'

const ReactStrapPagenation = ({ pageNum, setPageNum, pageMax }) => {
  const item = [];
  const pageMove = (num) => {
    setPageNum(num);
  }
  for(let i = 1; i <= 10; i++){
    if(i == pageNum){
      item.push(<Pagination.Item key={i} onClick={() => pageMove(i)} active>{i}</Pagination.Item>)
    }else{
      item.push(<Pagination.Item key={i} onClick={() => pageMove(i)}>{i}</Pagination.Item>)
    }
  }

  return (
    <Pagination className='justify-content-center mt-2'>
      <Pagination.First />
      <Pagination.Prev />
      {item}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  )
}

export default ReactStrapPagenation