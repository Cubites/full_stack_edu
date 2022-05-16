import React, { useState } from 'react'
import { ButtonGroup, Button } from 'reactstrap'

const ButtonsGroup = () => {
  // 버튼 그룹을 left, middle, right로 만들고
  // state 기본값을 10으로 셋팅한 후
  // left 를 누르면 -1, right를 누르면 +1 되게 하라
  const [number, setNumber] = useState(10);
  return (
    <div className="my-5">
      <ButtonGroup>
        <Button color="danger" onClick={() => setNumber(number - 1)}>left</Button>
        <Button color="success" onClick={() => setNumber(10)}>middle</Button>
        <Button color="primary" onClick={() => setNumber(number + 1)}>right</Button>
      </ButtonGroup>
      <div className="mt-2">{number}</div>
    </div>
  )
}

export default ButtonsGroup