import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const myexam = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>나의 예상 점수 : {myexam}</p>
      <button onClick={() => { dispatch({type: 'sleepHard'}) }}>푹 자기</button>
      <button onClick={() => { dispatch({type: 'workHard'}) }}>열심히 공부하기</button>
    </div>
  )
}

export default App