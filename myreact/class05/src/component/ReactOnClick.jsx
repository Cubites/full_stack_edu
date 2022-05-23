import React from 'react'

const ReactOnClick = () => {
  const btnClick = (param) => {
    if(typeof param != 'string') param = 'string 타입이 아닙니다.'
    console.log('param : ' + param);
  }
  const keyEvent = (eventText, e) => {
    let val = e.target.value;
    console.log('eventText : ' + eventText + ', value : ' + val);
  }
  return (
    <div>
      <button onClick={btnClick}>누르시오 1</button>
      <button onClick={(e) => btnClick('누르셨네요')}>누르시오 2</button><br />
      onKeyDown : <input type="text" onKeyDown={e => keyEvent('키다운 실행', e)} /> <br />
      onKeyPress : <input type="text" onKeyPress={e => keyEvent('키프레스', e)} /> <br />
      onKeyUp : <input type="text" onKeyUp={e => keyEvent('키업', e)} />
    </div>
  )
}

export default ReactOnClick