import React, {useState, useMemo} from 'react'


const thinkingCalculator = (number) => {
  console.log('생각중...');
  for(let i = 0; i < 999999999; i++){}
  return number + 10000;
}
const notThinkingCalculator = (number) => {
  console.log('생각 안하고 바로 답을 알려줍니다.');
  return number + 10000;
}

const App = () => {
  const [thinkNumber, setThinkNumber] = useState(1);
  const [notThinkNumber, setNotThinkNumber] = useState(1);

  // const thinkingSum = thinkingCalculator(thinkNumber);
  const thinkingSum = useMemo(() => {
    thinkingCalculator(thinkNumber)
  }, [thinkNumber]);
  const notThinkingSum = notThinkingCalculator(notThinkNumber);
  return (
    <div>
      <h2>생각 좀 한 다음에 계산하는 계산기</h2>
      <input
        type="number"
        value={thinkNumber}
        onChange={(e) => setThinkNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {thinkingSum}</span>

      <h2>생각 안하고 바로 계산하는 계산기</h2>
      <input
        type="number"
        value={notThinkNumber}
        onChange={(e) => setNotThinkNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {notThinkingSum}</span>
    </div>
  )
}

export default App