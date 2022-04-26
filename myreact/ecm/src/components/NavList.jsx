import React from 'react'

const NavList = (props) => {
  // console.log(props.navigation[0].mainnav);
  // let lists = [];
  // for(let nav of props.navigation[0].mainnav){
  //   lists.push(<a href={nav.alink} key={nav.id}>{nav.title}</a>);
  // }
  const mainNav = props.navigation[0].mainnav.map((m) => (
    <a href={'/'+m.alink+'/'} key={m.id} className='main-nav'>{m.title}</a>
  ));
  return (
    <>
      {/* {lists} */}
      {mainNav}
    </>
  )
}

export default NavList