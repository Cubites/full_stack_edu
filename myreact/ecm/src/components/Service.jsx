import React from 'react'
import styled from 'styled-components'
import { ElectricalServices, PhoneInTalk, People } from '@mui/icons-material'

const Container = styled.div`
  width: 1300px;
  padding: 15px 0;
  margin: 0 auto;
`
const Wrapper = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
`
const ConSub = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.3333%;
  padding: 15px;
  text-align: center;
  h3{
    margin-bottom: 20px;
    text-transform: upperCase;
  }
`
const ConList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
  li{
    line-height: 30px;
    a{
      display: block;
      font-size: 13px;
      color: #888;
    }&:hover{
      color: #666;
      background: #ededed;
    }
  }
`
const CallInfo = styled.h2`
  font-weight: 800;
  font-size: 20px;
  color: #d6b68a;
  margin: 15px 0;
`

const Service = () => {
  return (
    <Container>
      <Wrapper>
        <ConSub>
          <h3><ElectricalServices />COMPANY</h3>
          <ConList>
            <li><a href="#">회사소개</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보 처리방침</a></li>
            <li><a href="#">이용안내</a></li>
            <li><a href="#">직원채용</a></li>
          </ConList>
        </ConSub>
        <ConSub>
          <h3><PhoneInTalk />CALL INFO</h3>
          <CallInfo>1588-0000</CallInfo>
          <ConList>
            <li>AM. 10:00 ~ PM. 05:00</li>
          </ConList>
        </ConSub>
        <ConSub>
          <h3><People />Community</h3>
          <ConList>
            <li><a href="#">공지사항</a></li>
            <li><a href="#">고객문의</a></li>
            <li><a href="#">상품후기</a></li>
            <li><a href="#">자주하는 질문</a></li>
          </ConList>
        </ConSub>
      </Wrapper>
    </Container>
  )
}

export default Service