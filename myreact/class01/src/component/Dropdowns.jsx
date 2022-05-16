import React, { useState } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const Dropdowns = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <ButtonDropdown isOpen={ dropdownOpen } toggle={toggle}>
      <DropdownToggle caret>
        버튼
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>헤더</DropdownItem>
        <DropdownItem disabled>비활성화</DropdownItem>
        <a href="http://naver.com"><DropdownItem>웹사이트 이동</DropdownItem></a>
        <DropdownItem onClick={e => alert("온클릭!!!")}>온클릭 Alert</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  )
}

export default Dropdowns