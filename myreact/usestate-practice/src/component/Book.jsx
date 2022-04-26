import React from 'react'
import './book.css'

const Book = (props) => {
  let slist = [];
  for(let i in props.bookInfo){
    slist.push(
      <div className="book" key={props.bookInfo[i].id} onClick={() => {
        props.getChangebook(props.bookInfo[i].id);}}>
        <div className="image">
          <img src={props.bookInfo[i].image} alt={props.bookInfo[i].image} />
        </div>
        <div className="info">
          <h3>{props.bookInfo[i].title}</h3>
          <p>{props.bookInfo[i].writer}</p>
          <p>{props.bookInfo[i].publisher}</p>
          <p>{props.bookInfo[i].etc}</p>
        </div>
      </div>
    );
  }
  return (
    <>
      {slist}
    </>
  )
}

export default Book