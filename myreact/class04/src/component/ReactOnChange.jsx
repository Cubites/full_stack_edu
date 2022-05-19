import React from 'react'

const ReactOnChange = () => {
  const change = (e) => {
    let val = e.target.value;
    if(val !== ''){
      console.log('value : ' + val);
    }
  }
  return (
    <div>
      <input type="text" onChange={change} />
      <select onChange={e => change(e)}>
        <option value="">선택하시오</option>
        <option value="react">react</option>
        <option value="javascript">javascript</option>
        <option value="nodejs">nodejs</option>
        <option value="sql">sql</option>
        <option value="html">html</option>
      </select>
    </div>
  )
}

export default ReactOnChange