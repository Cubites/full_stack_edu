import React from 'react';
import { Link } from 'react-router-dom';

const Bestcafein = ({data}) => {
  let hashArr = data.hash.split(",");
  return (
    <div className="col-4 col-tb-6 py-15">
      <Link to="#" className="card">
        <div className="img-thumb" style={{backgroundImage: `url(images/${data.img})`}}></div>
        <div className="card-contents">
            <h3 className="ellipsis">{data.title}</h3>
            <p className="title-info ellipsis">{data.desc}</p>
            <p className="hash ellipsis">
                {
                  hashArr.map((text) => (
                    text === hashArr[0] ? <span className="act" key={text}>{text}</span> : <span key={text}>{text}</span>
                  ))
                }
            </p>
        </div>
      </Link>
    </div>
  )
}

export default Bestcafein