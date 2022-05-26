import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

const Paging = ({ pageNum, setPageNum, totalPage }) => {
  let pageNums = [];
  for(let i = 0; i < totalPage; i++){
    if(i + 1 === pageNum){
      pageNums.push(<Pagination.Item key={i} active>{i+1}</Pagination.Item>);
    }else{
      pageNums.push(<Pagination.Item key={i}>{i+1}</Pagination.Item>);
    }
  }
  // console.log(pageNum, totalPage);
  return (
    <Pagination className='justify-content-center mt-2'>
      <Pagination.First />
      <Pagination.Prev />
        {pageNums}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  )
}

export default Paging