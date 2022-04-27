import React, {useState, useEffect, useRef} from 'react'

const App = () => {
  // State >> 값이 바뀌면 렌더링됨 (화면 변화)
  // Ref >> 값이 바뀌어도 렌더링되지 않음 (화면 변화 없음) > 렌더링 시 변한 값 출력
  // 변수 >> 값이 바뀌어도 렌더링되지 않음 (화면 변화 없음) > 렌더링 시 초기 값으로 돌아감(let countVar = 0)
  
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const funTalk = () => {
    alert(`환영합니다. ${inputRef.current.value}님`);
  }

  return (
    <div>
      <input ref={inputRef} name="user" type="text" placeholder='이름을 입력하세요' />
      <button onClick={funTalk}> 이름출력 </button>
    </div>
  )
}

export default App