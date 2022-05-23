// import React, { Component } from 'react';

// export default class ReactSubmit extends Component {
//   thisSubmit = (e) => {
//     let inputValue = document.getElementById("inputId").value;
//     console.log(inputValue);
//     e.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.thisSubmit}>
//         <input type="text" name="inputName" id="inputId" />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

import React, { useState } from 'react'

const ReactSubmit = () => {
  const [userId, setUserId] = useState('');
  const handleId = e => {
    const { name, value } = e.target;
    if(value.length > 5){
      alert('문장이 너무 깁니다.');
    }
  }
  return (
    <div>
      <form>
        <input type="text" name="userId" onChange={handleId} />
      </form>
    </div>
  )
}

export default ReactSubmit