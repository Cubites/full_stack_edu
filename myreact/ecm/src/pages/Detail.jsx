import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const DetailBox = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`
const Image = styled.img`
  width: 40%;
  border: 1px solid #ddd;
  padding: 1%;
`
const DetailInfo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`
const GoodsName = styled.h3`
  font-weight: 400;
`
const GoodsOptions = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const Option = styled.li`
  border-bottom: 1px solid #ddd;
`
const TotalPrice = styled.h4`
  
`

const Detail = () => {
  let params = useParams().num.split("-");
  const [data, setData] = useState();
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/json/${params[0]}.json`);
      setData(response.data[params[1]]);
    }
    fetchData();
  })
  return (
    <DetailBox>
      <Image src={"/pdimages/" + data.image} />
      <DetailInfo>
        <GoodsName>{data.title}</GoodsName>
        <GoodsOptions>
          <Option>판매가</Option>
          <Option>할인가</Option>
          <Option>할인율</Option>
          <Option>사이즈</Option>
          <Option>수량</Option>
        </GoodsOptions>
        <TotalPrice>총 상품금액</TotalPrice>
      </DetailInfo>
    </DetailBox>
  )
}

export default Detail