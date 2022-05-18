import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, 
         Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap'

const ReactStrapNavbar = () => {

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => { setCollapsed(!collapsed); }

  return (
    <>
      <Navbar light>
        <NavbarBrand href="/" className='mr-auto'>MyReact</NavbarBrand>
        <NavbarToggler onClick={toggle} className='mr-2' />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/a'>회사소개</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/a'>상품소개</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/a'>커뮤니티</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/a'>오시는길</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default ReactStrapNavbar