import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DressIn from './DressIn'

const Dress = () => {
  const [dress, setDress] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async : 비동기형으로 불러옴을 지정
    async function fetchData(){
      setLoading(true);
      const response = await axios.get('./json/dress.json');
      setDress(response.data.slice(0, 10));
      setLoading(false);
    }
    fetchData();
  }, [])
  // console.log(dress);
  return (
    <>
      <h1 className="shopT-Title">
        DRESS
      </h1>
      <DressIn dress={dress} loading={loading} />
    </>
  )
}

export default Dress