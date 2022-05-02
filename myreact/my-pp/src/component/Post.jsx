import React from 'react'
import './post.css'
import navlist from '../data/data'
import {Link} from 'react-router-dom'

const Post = (props) => {
  let postlist_index = props.plindex;
  let post_index = props.pindex;
  return (
    <div className='post'>
      <h5>
        <Link to="/">{<i className="fa-solid fa-house-chimney"></i>}</Link>
        <i className="fa-solid fa-angle-right"></i>
        <Link to={"/" + navlist[postlist_index].link + "/"}>
          <i>{navlist[postlist_index].title}</i>
        </Link>
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