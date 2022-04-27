import React from 'react'
import styled from 'styled-components'

const CatContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: #eee;
  border-bottom: 1px Solid #ededed;
  border: 1px solid #ddd;
  position: absolute;
  z-index: 1000;
  top: 55px;
  left: 0;
`
const Wrapper = styled.div`
  width: 1300px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  algin-items: center;
  justify-content: space-between;
`

const Category = (props) => {
  // console.log(props.category[1].category);
  const subNav = props.category[1].category.map((s) => (
    <li><a href={'/' + s.alink + '/'} key={s.id}>{s.title}</a>
      {
        s.subarray && <ul>
          {
            s.subarray.map((n) => {
              return (
                <li><a href={'/' + n.alink + '/'} key={n.id}>{n.title}</a></li>
              )
            })
          }
        </ul>
      }
    </li>
  ))
  return (
    <CatContainer>
      <Wrapper>
        <ul className='category'>
          {subNav}
        </ul>
      </Wrapper>
    </CatContainer>
  )
}

export default Category