import React from 'react'

const ReactOnClick = () => {
  const thisClick = (param) => {
    if(typeof param != 'string') param = "Click a";
    console.log('param : ' + param);
  }
  return (
    <div>
      <button onClick={e => thisClick('Click Button')}>Click Button</button>
      <div onClick={e => thisClick('ClickDiv')}>Click Div</div>
      {/* <a href="#" onClick={thisClick}>Click a</a> */}
    </div>
  )
}

export default ReactOnClick

/*
  1. 버튼에 온클릭 변수 'Click Button'
  2. div 온클릭 변수 'Click Div'
  3. a 온클릭 함수실행
*/
