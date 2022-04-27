import React, { Component } from 'react'
import './post.css'
import navlist from '../data/data'

const Post = (props) => {
  let postlist_index = props.plindex - 1;
  let post_index = props.pindex - 1;
  return (
    <div className='post'>
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