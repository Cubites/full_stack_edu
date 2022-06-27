import React from 'react'
import { Link } from 'react-router-dom';

const Mleft = ({data}) => {
  return (
    <div className="col-8 col-tb-12 pr15">
      <div className="d-flex space-bet pb">
          <h2 className="c-title">카페 인기글</h2>
          <p className="dt f-right"></p>
      </div>
      <ul className="list-pop">
        {
          data.map((dt) => (
            <li key={"ranking_" + dt.lank}>
              <Link to="#" target="_blank" className="list">
                <div className="row align-item-center">
                  <div className="img-thumb2 col-2">
                    <img src={"images/" + dt.img} alt={"lanking_img" + dt.lank}/>
                  </div>
                  <div className="contents-pop col-6">
                    <h3 className="ellipsis"><strong>{dt.lank}</strong> {dt.title} </h3>
                  </div>
                  <div className="cafe-pop col-2">
                    <p className="ellipsis"> {dt.cafeName} </p>
                  </div>
                  <div className="sub-pop col-2">
                    <p>댓글 <span>{dt.review}</span></p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Mleft