import React from 'react'
import styled from 'styled-components'

const NavList = (props) => {
  console.log(props.navigation);
  let lists = [];
  for(let nav of props.navigation){
    lists.push(<a href={nav.alink} key={nav.id}>{nav.title}</a>);
  }
  return (
    <>
      {lists}
    </>
  )
}

export default NavList