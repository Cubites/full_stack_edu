import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logoImage from '../images/logo.png';
import axios from 'axios';

const Headerbox = styled.div`
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
const Navbar = styled.div`
  width: 700px;
  position: relative;
  &:hover{

  }
`
const NavHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border: 1px solid #333;
  &:hover{
    Subnavs{
      display: flex;
    }
  }
`
const NavHeaderCon = styled.a`
  display: block;
  text-decoration: none;
  width: 25%;
  height: 100%;
  font-size: 30px;
  font-weight: bold;
  color: #333;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  &:hover{
    background-color: #0076BE;
    color: #fff;
  }
`
const SubNavs = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  display: none;
`
const SubNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  text-align: center;
`
const SubNavCon = styled.li`
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-weight: bold;
  color: #333;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  &:hover{
    background-color: #0076BE;
    color: #fff;
  }
`

const Header = () => {
  let [navhead, setNavhead] = useState([]);
  useEffect(() => {
    axios.get("data/data.json")
      .then(response => {
         setNavhead(response.data.nav);
        }
    )
  }, []);
  
  return (
    <Headerbox>
      <Logo src={logoImage} />
      <Navbar>
        <NavHeader>
          {
            navhead.map((content, i) => (<NavHeaderCon key={"navhead" + i}>{content.title}</NavHeaderCon>))
          }
        </NavHeader>
        <SubNavs>
          {
            navhead.map((content, i) => (
              <SubNav key={"navmain" + i}>
                {
                  content.sub.map((subcontent, i) => (
                    <SubNavCon key={"sub" + i}>{subcontent}</SubNavCon>
                  ))
                }
              </SubNav>
            ))
          }
        </SubNavs>
      </Navbar>
    </Headerbox>
  )
}

export default Header