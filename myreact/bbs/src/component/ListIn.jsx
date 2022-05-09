import React from 'react'
import { Link } from 'react-router-dom'

const ListIn = () => {
  return (
    <tr className='text-center'>
      <td className="mobile-hidden">1</td>
      <td>
        <Link to="read/1">제목입니다.</Link>
      </td>
      <td>
        <Link to="read/1">홍길동</Link>
      </td>
      <td>
        <Link to="read/1">2022.05.09</Link>
      </td>
      <td>
        265
      </td>
    </tr>
  )
}

export default ListIn