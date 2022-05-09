import React, { useState, useReducer } from 'react'
import './App.css'

// reducer : state를 업데이트 하는 역할 (은행)
// dispatch : state 업데이트를 위한 요구자
// action : 요구 내용
const reducer = (state, action) => {
  console.log('reducer가 작동합니다.', state, action);
  switch(action.type){
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
}

const App = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>useReducer 은행입니다.</h1>
      <p>지금 당신의 잔고는 : {money} 원 입니다.</p>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button onClick={() => dispatch({
        type: 'deposit',
        payload: number
      })}>예금</button>
      <button onClick={() => dispatch({
        type: 'withdraw',
        payload: number
      })}>출금</button>
    </div>
  )
}

export default App