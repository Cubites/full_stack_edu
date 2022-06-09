import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';

const Paging = () => {
  const [pageNum, setPageNum] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const item = [];

  const sendPage = (num) => {
    setPageNum(num);
    axios('/index', { pagenum: num});
  }

  // useEffect(() => {
  //   axios.get('/api/totalNumber')
  //     .then(n => setTotalPage(n.data[0].count));
  // }, []);
  for(let i = 0; i < 10; i++){
    if(i === pageNum){
      item.push(<Pagination.Item key={item} onClick={(i) => sendPage(i)} active>{i + 1}</Pagination.Item>);
    }else{
      item.push(<Pagination.Item key={item} onClick={(i) => sendPage(i)}>{i + 1}</Pagination.Item>);
    }
  }
  return (
    <Pagination className='justify-content-center mt-5'>
      <Pagination.First />
      <Pagination.Prev />
        {
          item
        }
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  )
}

export default Paging