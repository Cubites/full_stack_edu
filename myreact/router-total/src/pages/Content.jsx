import React from 'react'
import { useParams } from 'react-router-dom'

const Content = () => {
  let params = useParams();
  return (
    <div>{params.user}</div>
  )
}

export default Content