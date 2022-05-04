import React, {useMemo} from 'react'

const getNumber = (number) => {
  console.log("숫자가 변경되었음.");
  return number;
}
const getText = (text) => {
  console.log("글씨가 변경되었음.");
  return text;
}

const ShowState = ({number, text}) => {
  const showNumber = useMemo(() => getNumber(number), [number]);
  const showText = useMemo(() => getText(text), [text]);
  return (
    <div>
      {showNumber}
      {showText}
    </div>
  )
}

export default ShowState