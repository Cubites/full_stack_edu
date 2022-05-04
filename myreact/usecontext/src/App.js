import React, {useState, useEffect} from 'react'
import ShowState from './ShowState';

const App = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const increaseNumber = () => {
    setNumber((prevState) => prevState + 1);
  }
  const decreaseNumber = () => {
    setNumber((prevState) => prevState - 1);
  }
  const onChangeText = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <div>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>-</button>
        <input
          type="text"
          placeholder="이름을 입력"
          onChange={onChangeText}
        />
        <ShowState number={number} text={text} />
      </div>
    </div>
  )
}

export default App