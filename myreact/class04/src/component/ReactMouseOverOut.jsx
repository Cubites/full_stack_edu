import React from 'react'

const ReactMouseOverOut = () => {
  const BigShow = () => {
    document.getElementById('bigVer').style.display = 'block';
  }
  const BigNoShow = () => {
    document.getElementById('bigVer').style.display = 'none';
  }
  return (
    <div>
      <div style={{width: '200px', height: '200px', backgroundColor: "#333", margin: "10px 10px"}}
        onMouseOver={() => BigShow()}
        onMouseOut={() => BigNoShow()}
      >
        <div id="bigVer" style={{width: '500px', height: '500px', backgroundColor: "#666", display: 'none'}}></div>
      </div>
    </div>
  )
}

export default ReactMouseOverOut