import React from 'react';
import { Link } from 'react-router-dom';
import { FlutterDash, DensityMedium } from '@mui/icons-material';

const Header = () => {
  function openNav(){
    document.getElementById("mynav").style.left="0%";
  }
  function closeNav(){
    document.getElementById("mynav").style.left="-100%";
  }
  return (
    <header className="container mx-auto">
      <div className="row">
        <div className="col-2 col-tb-12">
          <Link className="brand" to="/">
            <FlutterDash /> CAFE
          </Link>
        </div>
        <Link to="javascript:void(0)" className="nav-btn" onClick={() => openNav()}>
          <DensityMedium />
        </Link>
        <nav className="col-10" id="mynav">
          <Link to="javascript:void(0)" className="close-btn" onClick={() => closeNav()}>
            <span className="material-icons">close</span>
          </Link>
          <div className="row">
            <div className="col-8 col-tb-12">
              <Link to="/" className="weight red">홈</Link>
              <Link to="/">팬카페</Link>
              <Link to="/">카페랭킹</Link>
              <Link to="/">내카페</Link>
              <span className="bar"></span>
              <Link to="/" className="red">온라인교실</Link>
            </div>
            <div className="col-4 col-tb-12 text-right">
              <Link to="/" className="search">
                <span className="material-icons">search</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header