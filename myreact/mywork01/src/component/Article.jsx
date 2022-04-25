import React from 'react'

const Article = (props) => {
  return (
    <article className="col-9">
      <h2 className="text-center">{props.title}</h2>
      <p className="border-1 p-3">{props.desc}</p>
    </article>
  )
}

export default Article