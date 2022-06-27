import React from 'react';
import { Link } from 'react-router-dom';

const Mright = () => {
  function vl(n){
    let page = document.getElementById("page");
    let supportBoxa = document.querySelector(".support-boxa");
    let supportBoxb = document.querySelector(".support-boxb");
    if(n){
      //page 0의 action 을 지우고 support-boxa action을 지운다.
      //page 1에 action 을 넣고 support-boxb action을 추가한다.
      page.children[0].classList.remove("action");
      page.children[1].classList.add("action");
      supportBoxa.classList.remove("act");
      supportBoxb.classList.add("act");
    }else{
      page.children[1].classList.remove("action");
      page.children[0].classList.add("action");
      supportBoxb.classList.remove("act");
      supportBoxa.classList.add("act");
    }
  }
  return (
    <div className="col-4 col-tb-12">
      <h2>공지</h2>
      <p className="cafe-notice">
          <Link to="#">대문 꾸미리 '다음 에디터' 서비스 종료 안내</Link>
      </p>
      <ul className="ul-notice">
          <li><Link to="#">카페앱 대문 꾸비기 대문 꾸미기 </Link></li>
          <li><Link to="#">다음 에디터 사용 종료 안내 </Link></li>
          <li><Link to="#">불법촬영물등의 유통 방지를 위한 기술적, 관리적 관점에서 보는 생각 </Link></li>
          <li><Link to="#">우리 카페 홍보 신청방법(new) 을 안내해 드려요! </Link></li>
          <li><Link to="#">카페앱 대문 꾸비기 대문 꾸미기 </Link></li>
      </ul>
      <h2 className="mt-4">카페 지원 안내</h2>
      <div className="support-box">
        <div className="support-boxa act">
            <p>나니즈와 함께하는
                서포터즈 카페랭킹
                구경하실래요?</p>
            <div className="face">
                <div className="eyes eye-left"></div>
                <div className="eyes eye-right"></div>
                <div className="nose">
                    <div className="nostrils nostrils-left"></div>
                    <div className="nostrils nostrils-right"></div>
                </div>
            </div>
        </div>
        <div className="support-boxb">

        </div>
        <ul className="page" id="page">
          <li className="action" onClick={() => vl(0)}></li>
          <li onClick={() => vl(1)}></li>
        </ul>
      </div>
    </div>
  )
}

export default Mright