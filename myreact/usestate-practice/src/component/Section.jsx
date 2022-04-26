import React from 'react'
import './section.css'

const Section = (props) => {
  // console.log(props);
  // title: 'book1', writer: 'writer1', publisher: 'publisher1', etc: 'etc1', content:
  return (
    <section>
      <div className="top">
        <div className="name">{props.info.title}</div>
        <div className="infoElse">
          <p>{props.info.writer}</p>
          <p>{props.info.publisher}</p>
          <p>{props.info.etc}</p>            
        </div>
      </div>
      <div className="content">
        {props.info.content}
      </div>
    </section>
  )
}

export default Section