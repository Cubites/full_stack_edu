import React, { Component } from 'react';
import './post.css';

const Post = () => {
  return (
    <div className='post'>
      <div className='home'>
        <div className="headLink">
          <i className="fa-solid fa-house-chimney"></i>
        </div>
        <div className="postBox">
          <div className="title">{this.props.contents.title}</div>
          <div className="content">{this.props.contents.text}</div>
        </div>
      </div>
    </div>
  )
}

export default Post