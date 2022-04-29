import React, { useState, useEffect } from 'react'
import axios from 'axios'
import OuterIn from './OuterIn'

const Outer = () => {
  const [outers, setOuters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async : 비동기형으로 불러옴을 지정
    async function fetchData(){
      setLoading(true);
      const response = await axios.get('./json/outer.json');
      setOuters(response.data.slice(0, 10));
      setLoading(false);
    }
    fetchData();
  }, [])
  // console.log(outers);
  return (
    <>
      <OuterIn outers={outers} loading={loading} />
    </>
  )
}

export default Outer