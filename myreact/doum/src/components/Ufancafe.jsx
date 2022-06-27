import React from 'react';
import { Link } from 'react-router-dom';

const Ufancafe = ({data}) => {
  return (
    <section className="fanCafe">
      <div className="container pt-55 pb-50">
        <div className="row justify-space-between px-15">
          <h2>
              <div className="icon">
                  <span className="material-icons">groups</span>
              </div>
              팬카페
          </h2>
          <p><Link to="#">전체보기</Link></p>
        </div>

        <div className="row pt-40">
          {
            data.map((dt) => (
              <div className="col-4" key={"fancafe" + dt.rank}>
                <Link to="#" className="card-box">
                  <div className="card-img">
                    <img src={"images/" + dt.img} alt="009"/>
                    <div className="numberbox">{dt.rank}</div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="circle-img">
                        <img src="images/bk1.jpg" alt="bk1"/>
                      </div>
                      <div className="card-content">
                        <strong>{dt.name}</strong>
                        <div className="card-tag">
                            <span className="rbox">카페 {dt.cafeRank}등</span>
                            <span className="ybox">응원 {dt.cheerRank}등</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Ufancafe