import React, { useEffect } from 'react'

const FetchGetFunc = () => {
  // 에러 : Effect callbacks are synchronous to prevent race conditions. Put the async function inside
  // >> async 를 함수 안으로 넣으라는 의미 
  // (X) useEffect(async () => {}, [])
  // (O) useEffect(() => { function fetchData = async () => {} }, [])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://date.jsontest.com');
      const body = await response.json();
      alert(body.date);
    }
    fetchData();
  }, []);
  return (
    <div>FetchGetFunc</div>
  )
}

export default FetchGetFunc