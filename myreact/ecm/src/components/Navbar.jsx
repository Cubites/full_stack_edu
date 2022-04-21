import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
// import Search from '@mui/icons-material/Search'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'

const Container = styled.div`
  height: 60px;
  border: 1px solid #ededed;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  algin-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  algin-items: center;
  justify-content: flex-end;
  margin-left: 25px;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid #999;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
`
const Logo = styled.span`
  display: inline-block;
  height: 40px;
  width: 50px;
  background: url(images/logo.png) no-repeat center;
  background-size: contain;
`
const LogoText = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: #565b6e;
  margin: 0;
  line-height: 1;
  cursor: pointer;
`
const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 15px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
          <Left>
            <Language>KO</Language>
            <SearchContainer>
              <Input />
              <Search style={{color: "#999", fontSize: 18}} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo />
            <LogoText>My SHOP</LogoText>
          </Center>
          <Right>
            <MenuItem>로그인</MenuItem>
            <MenuItem>회원가입</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar