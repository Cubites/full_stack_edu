import React, {useState, useMemo, useCallback} from 'react'
import './App.css'
import DrawBox from './DrawBox';
import CircleBox from './CircleBox';

// useMemo 와 useCallBack의 차이점
const App = () => {
  const [boxSize, setBoxSize] = useState(10);
  const [circleSize, setCircleSize] = useState(10);
  const [fontSize, setFontSize] = useState(16);

  const boxSizer = useMemo(() => {
    return [boxSize, boxSize * 2, boxSize * 3]
  }, [boxSize])

  const circleSizer = useCallback(() => {
    return [circleSize, circleSize * 2, circleSize * 3]
  })

  return (
    <>
      <h1>useCallBack & useMemo</h1>
      <div className="btn-group">
        <button onClick={() => setFontSize(fontSize - 1)}>-</button>
        <button onClick={() => setFontSize(fontSize + 1)}>+</button>
      </div>
      <div className="view-group">
        <div>
          <p style={{fontSize: fontSize + 'px'}}>
            사각형박스
          </p>
          <input type="number" value={boxSize} onChange={e => setBoxSize(parseInt(e.target.value))} />
          <div className='boxbox'>
            <DrawBox boxSizer={boxSizer} />
          </div>
        </div>
        <div>
          <p style={{fontSize: fontSize + 'px'}}>
            원형박스
          </p>
          <input type="number" value={circleSize} onChange={e => setCircleSize(parseInt(e.target.value))} />
          <div className='boxbox'>
            <CircleBox circleSizer={circleSizer} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App