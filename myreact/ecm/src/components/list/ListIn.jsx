import React from 'react'
import styled from 'styled-components'

const GoodsList = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Goods = styled.a`
  display: block;
  text-align: center;
  margin: 10px 0;
  padding: 10px 0;
  &:hover{
    border: 1px solid #333;
  }
`
const GoodsImage = styled.img`
  height: 80%;
`
const GoodsTitle = styled.p`
  margin: 0;
  margin: 3px 0;
`

const ListIn = ({lists, total, page, limit}) => {
  const offset = (page - 1) * limit;
  return (
    <GoodsList>
      {
        lists.slice(offset, offset + limit).map((data) => (
          <Goods href="#" className={"col" + (limit / 4)} key={data.id}>
            <GoodsImage src={"/pdimages/" + data.image} alt="" />
            <GoodsTitle>{data.title}</GoodsTitle>
            <p style={{fontSize : "12px"}}>{data.desc}</p>
          </Goods>
        ))
      }
    </GoodsList>
  )
}

export default ListIn