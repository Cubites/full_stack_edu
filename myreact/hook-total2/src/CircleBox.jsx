import React, { useState, useEffect } from 'react'

const CircleBox = ({ circleSizer }) => {
  const [sizes, setSizes] = useState([]);
  useEffect(() => {
    setSizes(circleSizer);
    console.log('원형 박스 실행');
  }, [circleSizer])
  if(sizes != 0){
    return (
      sizes.map(size => 
        <div className="myCircle" style={{width: size + 'px', height: size + 'px'}} key={size}>
          {size}
        </div>
      )
    )
  }
}

export default CircleBox