import React, { useState } from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
// import Search from '@mui/icons-material/Search'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Search, ShoppingCartOutlined, 
        LoginOutlined, AppRegistrationOutlined,
        MenuOutlined, Close } from '@mui/icons-material'
import NavList from './NavList'
import Category from './Category'
// import Slider from './Slider'
import Slide from './Slide'
import navigation from '../data/data'

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #ededed;
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
const Left = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 15px
  padding-right: 15px;
`
const Right = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  display: flex;
  algin-items: center;
  justify-content: flex-end;
`
const SearchContainer = styled.div`
  background-color: #ededed;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 50%;

`
const Input = styled.input`
  border: none;
  width: 100%;
  padding: 5px;
  background: transparent;
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
  cursor: pointer;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const MenuItem2 = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  &:not(:last-child):after{
    content: "";
    display: block;
    height: 12px;
    width: 1px;
    background: #bbb;
    position: absolute;
    transform: rotate(15deg);
    right: -10px;
  }
`
const MenuItemText = styled.div`
  font-size: 12px;
  text-align: center;
  display: block;
`
const NavLeft = styled.div`
  flex: 0 0 50px;
  border-left: 1px solid #ededed;
  border-right: 1px solid #ededed;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 250px);
  padding-left: 50px;
  padding-right: 70px;
`
const NavRight = styled.div`
  flex: 0 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);
  let burger;

  const resetCategory = () => {
    setShowCategory(!showCategory);
  }

  if(showCategory){
    burger = <Close style={{cursor: 'Pointer', fontSize: '40px'}} onClick={resetCategory} />;
  }else{
    burger = <MenuOutlined style={{cursor: 'Pointer', fontSize: '40px'}} onClick={resetCategory} />;
  }
  return (
    <>
      <Container>
        <Wrapper style={{padding: '15px 0'}}>
            <Left>
              <Logo />
              <LogoText>My SHOP</LogoText>
            </Left>
            <Center>
              <SearchContainer>
                <Input />
                <Search style={{color: "#999", fontSize: 18}} />
              </SearchContainer>
            </Center>
            <Right>
              <MenuItem>
                <LoginOutlined />
                <MenuItemText>로그인</MenuItemText>
              </MenuItem>
              <MenuItem>
                <AppRegistrationOutlined />
                <MenuItemText>회원가입</MenuItemText>
              </MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
      </Container>

      <Container style={{borderBottom: "5px solid #ededed", position: "relative"}}>
        <Wrapper>
          <NavLeft>
            {burger}
          </NavLeft>
          <NavCenter>
            <NavList navigation={navigation} />
            { showCategory && <Category category={navigation} /> }
          </NavCenter>
          <NavRight>
            <MenuItem2>회원가입</MenuItem2>
            <MenuItem2>로그인</MenuItem2>
            <MenuItem2>고객센터</MenuItem2>
          </NavRight>
        </Wrapper>
      </Container>
      <Slide />
      {/* <Container>
        <Slider />
      </Container> */}
    </>
  )
}

export default Navbar