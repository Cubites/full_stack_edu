import React, { useState, useEffect, useMemo } from 'react'

const App = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country : isKorea ? '한국' : '외국'
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('location 값이 바뀌었습니다.');
  }, [location])

  return (
    <div>
      <h2>대중교통을 몇 번 이용하세요?</h2>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <hr />
      <h2>어느 나라에 사시는데요?</h2>
      <p> 사는 곳: {location.country} </p>
      <button onClick={() => setIsKorea(!isKorea)}>사는 곳</button>
    </div>
  )
}

export default App