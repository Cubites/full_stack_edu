import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TopIn from './TopIn'

const Top = () => {
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async : 비동기형으로 불러옴을 지정
    async function fetchData(){
      setLoading(true);
      const response = await axios.get('./json/top.json');
      setTop(response.data.slice(0, 10));
      setLoading(false);
    }
    fetchData();
  }, [])
  // console.log(top);
  return (
    <>
      <h1 className="shopT-Title">
        TOP
      </h1>
      <TopIn top={top} loading={loading} />
    </>
  )
}

export default Top