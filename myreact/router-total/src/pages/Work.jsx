import React from 'react'
import { useParams } from 'react-router-dom'

const Work = () => {
  let params = useParams();
  return (
    <div>{params.user}</div>
  )
}

export default Work