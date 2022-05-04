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
  height: 65%;
`
const GoodsTitle = styled.p`
  margin: 0;
  margin: 3px 0;
`
const GoodsInfo = styled.p`
  margin: 1px 0;
`
const AddInfoList = styled.div`
  display: flex;
  justify-content: center;
`
const AddInfo = styled.span`
  display: block;
  font-size: 12px;
  color: #fff;
  margin: 0 1px;
`

const ListIn = ({lists, total, page, limit}) => {
  const offset = (page - 1) * limit;
  function commas(num){
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <GoodsList>
      {
        lists.slice(offset, offset + limit).map((data) => (
          <Goods href="#" className={"col" + (limit / 4)} key={data.id}>
            <GoodsImage src={"/pdimages/" + data.image} alt="" />
            <GoodsTitle>{data.title}</GoodsTitle>
            <GoodsInfo style={{fontSize : "12px"}}>{data.desc}</GoodsInfo>
            <GoodsInfo style={{fontSize : "12px"}}>
              {Number(data.sale) === 0 ? commas(data.price) + "원" : <del>{commas(data.price)} 원</del>}
            </GoodsInfo>
            { Number(data.sale) === 0 ? null : <GoodsInfo style={{fontSize : "12px"}}>{commas(data.price * (1 - data.sale/10))} 원</GoodsInfo> }
            <AddInfoList>
              { (data.new) ? <AddInfo className='new'>New</AddInfo> : null }
              { (data.event) ? <AddInfo className='event'>EVENT</AddInfo> : null }
              { (data.sale) ? <AddInfo className='sale'>&darr;{data.sale * 10 + "%"} SALE</AddInfo> : null }
            </AddInfoList>
          </Goods>
        ))
      }
    </GoodsList>
  )
}

export default ListIn