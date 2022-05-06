import React, { useState, useCallback } from 'react'
// import WUseCallback from './component/WUseCallback'
import Box from './component/Box';

const App = () => {
  // const [number, setNumber] = useState(0);
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);
  /*
    1. useCallback을 하지 않으면 isDark가 변경되면서 App이 재실행
    2. App이 재실행 되면서 createBoxStyle도 재실행되어 주소가 재할당 됨
    3. creatBoxStyle을 받은 Box.jsx에서 useEffect가 주소 변경을 인식하고 콘솔창에 문구를 출력하게됨
    >> 즉 createBox에 useCallback을 씌워야 함
  */
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'lightblue',
      width: `${size}px`,
      height: `${size}px`
    }
  }, [size]);
  return (
    <div style={{
      background: isDark ? 'black' : 'white'
    }}>
      {/* <WUseCallback number={number} setNumber={setNumber} /> */}
      <input type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
      />
      <br />
      <button onClick={() => setIsDark(!isDark)}>바탕화면 바꾸기</button>
      <br />
      <Box createBoxStyle={createBoxStyle} />
    </div>
  )
}

export default App