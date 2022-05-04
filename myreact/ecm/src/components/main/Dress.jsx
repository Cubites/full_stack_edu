import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  return (
    <>
      <h1 className="shopT-Title">
        <Link to="/dress/dress">DRESS</Link>
      </h1>
      <DressIn dress={dress} loading={loading} />
    </>
  )
}

export default Dress