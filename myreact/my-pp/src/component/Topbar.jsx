import './topbar.css'
import React from 'react'
import navlist from '../data/data'

const Topbar = (props) => {
  let nlist = [];
  let snlist = [];
  for(let i in navlist){
    // subnav(ul.lnb>li) 생성
    for(let j in navlist[i].contents){
      snlist.push(
        <li key={navlist[i].contents[j].id}>
          <a href="/" onClick={(e) => {
            e.preventDefault();
            props.setShowHome(false);
            props.setShowPostlist(false);
            props.setShowPost(true);
            props.setPostlistIndex(Number(i)+1);
            props.setPostIndex(Number(j)+1);}}>
            {navlist[i].contents[j].name}
          </a>
        </li>
      );
    }
    // mainnav(div.gnb) 생성, 앞에서 생성한 subnav 포함
    nlist.push(
      <div className="gnb" key={navlist[i].id}>
        <h2 onClick={() => {
            props.setShowHome(false);
            props.setShowPostlist(true);
            props.setShowPost(false);
            props.setPostlistIndex(Number(i)+1)}}>{navlist[i].title}</h2>
        <ul className="lnb">
          {snlist}
        </ul>
      </div>
    );
    snlist = [];
  }
  return (
    <div className='topbar'>
      <h1>
        <a href="/" onClick={(e) => {
          e.preventDefault();
          props.setShowHome(true);
          props.setShowPostlist(false);
          props.setShowPost(false);}}>Main</a>
      </h1>
      {nlist}
    </div>
  )
}

export default Topbar