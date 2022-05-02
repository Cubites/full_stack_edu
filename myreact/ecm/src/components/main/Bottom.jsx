import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BottomIn from './BottomIn'

const Bottom = () => {
  const [bottom, setBottom] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async : 비동기형으로 불러옴을 지정
    async function fetchData(){
      setLoading(true);
      const response = await axios.get('./json/bottom.json');
      setBottom(response.data.slice(0, 10));
      setLoading(false);
    }
    fetchData();
  }, [])
  // console.log(bottom);
  return (
    <>
      <h1 className="shopT-Title">
        BOTTOM
      </h1>
      <BottomIn bottom={bottom} loading={loading} />
    </>
  )
}

export default Bottom