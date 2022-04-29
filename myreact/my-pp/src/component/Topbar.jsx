import './topbar.css'
import React from 'react'
import navlist from '../data/data'
import {Link} from 'react-router-dom'

const Topbar = (props) => {
  let nlist = [];
  let snlist = [];
  for(let i in navlist){
    // subnav(ul.lnb>li) 생성
    for(let j in navlist[i].contents){
      snlist.push(
        <li key={navlist[i].contents[j].id}>
          <Link to={"/" + navlist[i].title + '/' + navlist[i].contents[j].link} onClick={(e) => {
            props.setPostlistIndex(Number(i));
            props.setPostIndex(Number(j));}}>
            {navlist[i].contents[j].name}
          </Link>
        </li>
      );
    }
    // mainnav(div.gnb) 생성, 앞에서 생성한 subnav 포함
    nlist.push(
      <div className="gnb" key={navlist[i].id}>
        <Link to={"/" + navlist[i].title + "/"} onClick={() => {props.setPostlistIndex(Number(i))}}>{navlist[i].title}</Link>
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
        <Link to="/">Main</Link>
      </h1>
      {nlist}
    </div>
  )
}

export default Topbar