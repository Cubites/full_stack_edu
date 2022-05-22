import React from 'react'
import styled from 'styled-components';
import bglogoImage from '../images/logo_bg.png';

const Footerbox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`
const Logo = styled.img`
  width: 200px;
  height: 40px;
`

const Footer = () => {
  return (
    <Footerbox>
      <Logo src={bglogoImage} alt="footer logo" />
    </Footerbox>
  )
}

export default Footer