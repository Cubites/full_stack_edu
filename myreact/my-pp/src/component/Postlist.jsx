import React from 'react'
import './postlist.css'
import navlist from '../data/data'

const Postlist = (props) => {
  let posts = [];
  let nav_index = props.index;
  for(let i in navlist[nav_index].contents){
    posts.push(
      <div key={navlist[nav_index].contents[i].id} onClick={() => {
        props.setShowHome(false);
        props.setShowPostlist(false);
        props.setShowPost(true);
        props.setPostlistIndex(nav_index);
        props.setPostIndex(Number(i));}}>
        <div className="title">{navlist[nav_index].contents[i].name}</div>
        <div className="content">{navlist[nav_index].contents[i].text}</div>
      </div>
    )
  }
  return (
    <div className='postlist'>
      <h5>
        <i className="fa-solid fa-house-chimney" 
          onClick={() => {
            props.setShowHome(true);
            props.setShowPostlist(false);
            props.setShowPost(false);}}></i>
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