import React from 'react'
import './post.css'
import navlist from '../data/data'

const Post = (props) => {
  let postlist_index = props.plindex;
  let post_index = props.pindex;
  return (
    <div className='post'>
      <h5>
        <i className="fa-solid fa-house-chimney"></i>
        <i className="fa-solid fa-angle-right"></i>
        <i>{navlist[postlist_index].title}</i>
        <i className="fa-solid fa-angle-right"></i>
        <i>{navlist[postlist_index].contents[post_index].name}</i>
      </h5>
      <div className='home'>
        <div className="postBox">
          <h1>{navlist[postlist_index].contents[post_index].name}</h1>
          <div className="content">{navlist[postlist_index].contents[post_index].text}</div>
        </div>
      </div>
    </div>
  )
}

export default Post