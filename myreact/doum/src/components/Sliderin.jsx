import React from 'react';
import { Link } from 'react-router-dom';

const Sliderin = ({data}) => {
  // console.log(data);
  return (
    <div className="slidein">
      <h3><span className="light">{data.num}</span> {data.title}</h3>
      <ul>
        <li className="active">
          {
            data.subtitle.map((dt) => (
              <Link to="/" key={data.id + "_" + dt.id}>
                <span className="list-text">{dt.title}</span>  
                <span className="cafe-text">{dt.cafe}</span>
              </Link>
            ))
          }          
        </li>
      </ul>
    </div>
  )
}

export default Sliderin