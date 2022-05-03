import React, {useState} from 'react'

const App = () => {
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(1);

  const bulbSwitch = () => setOn(!on);
  const bulbAdd = () => setCount(count + 1);

  let bulb = <div className={on ? "bulb-on" : "bulb-off"} />;
  const bulbs = Array(count).fill(bulb);
  return (
    <div style={{textAlign: 'center', width: '350px', margin: '10px auto'}}>
      <div className="bulbs">
        {bulbs}
      </div>
      <button onClick={bulbSwitch}>On/Off</button>
      <button onClick={bulbAdd}>조명추가</button>
    </div>
  )
}

export default App