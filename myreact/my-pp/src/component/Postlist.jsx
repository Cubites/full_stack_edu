import React from 'react'
import './postlist.css'
import navlist from '../data/data'

const Postlist = (props) => {
  let posts = [];
  let nav_index = props.index - 1;
  for(let i in navlist[nav_index].contents){
    posts.push(
      <div key={navlist[nav_index].contents[i].id} onClick={() => {
        props.setShowHome(false);
        props.setShowPostlist(false);
        props.setShowPost(true);
        props.setPostlistIndex(Number(i)+1);
        props.setPostIndex(nav_index+1);}}>
        <div className="title">{navlist[nav_index].contents[i].name}</div>
        <div className="content">{navlist[nav_index].contents[i].text}</div>
      </div>
    )
  }
  return (
    <div className='postlist'>
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