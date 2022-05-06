import React, { useState, useEffect } from 'react'

const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스크기를 늘립니다.");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return (
    <div style={style}>Box</div>
  )
}

export default Box