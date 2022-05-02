import React from 'react'
import './postlist.css'
import navlist from '../data/data'
import {Link} from 'react-router-dom'

const Postlist = (props) => {
  console.log(props.index);
  let posts = [];
  let nav_index = props.index;
  for(let i in navlist[nav_index].contents){
    posts.push(
      <Link to={"/" + navlist[nav_index].link + "/" + navlist[nav_index].contents[i].link} key={navlist[nav_index].contents[i].id}>
        <div className="title">{navlist[nav_index].contents[i].name}</div>
        <div className="content">{navlist[nav_index].contents[i].text}</div>
      </Link>
    )
  }
  return (
    <div className='postlist'>
      <h5>
        <Link to="/">{<i className="fa-solid fa-house-chimney"></i>}</Link>
        <i className="fa-solid fa-angle-right"></i>
        <i>{navlist[nav_index].title}</i>
        <i className="fa-solid fa-angle-right"></i>
      </h5>
      <div className="main">
        <h1>{navlist[nav_index].title}</h1>
        <div className="postCollect">
          {posts}
        </div>
      </div>
    </div>
  )
}

export default Postlist