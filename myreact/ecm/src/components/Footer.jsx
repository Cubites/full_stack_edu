import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Foot = styled.div`
  width: 100%;
  padding: 30px 0;
  margin: 30px auto;
  background: #333;
  color: #ededed;
  font-size: 14px;
  font-weight: 300;
`
const Wrapper = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
`
const ColSub = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
`

const Footer = () => {
  return (
    <Foot>
      <Wrapper>
        <ColSub>
          <Link to="/"><img src="/images/logo.png" alt="myshop" style={{width: '50px'}} /></Link>
        </ColSub>
        <ColSub>
          <p>주소: 경기도 김포시 장기동 장기로 111</p>
          <p>개인정보책임자: 김모씨 src@myshop.com</p>
          <p>대표: 홍길동</p>
        </ColSub>
        <ColSub>
          <p>사업자등록 번호: 103-1234-1234</p>
          <p>통신판매업신고번호 : 2022-경기김포-1234</p>
        </ColSub>
        <ColSub>
          <p>고객님의 안전한 금융거래를 위해</p>
          <p>Copyright &copy; MyShop all right reserved.</p>
        </ColSub>
      </Wrapper>
    </Foot>
  )
}

export default Footer