import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 15px;
`
const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 5px 8px;
  margin: 0;
  background: #fff;
  color: #555;
  font-size: 16px;
  &:hover{
    background: #ddd;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled]{
    background: #fff;
    color: #999;
    cursor: revert;
    transform: revert;
  }
  &[aria-current]{
    background: #ededed;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`

const Pagination = ({total, page, setPage, limit}) => {
  const numPages = Math.ceil(total / limit);
  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {
        Array(numPages).fill().map(($, i) => (
          <Button 
            key={i + 1} 
            onClick={() => setPage(i + 1)}
            aria-current={page === i+1 ? "page" : null}
            >{i + 1}</Button>
        ))
      }
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  )
}

export default Pagination