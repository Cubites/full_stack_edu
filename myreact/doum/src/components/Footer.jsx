import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container">
      <h2>CAFE</h2>
      <ul className="d-flex">
        <li><Link to="#">서비스 약관/정책</Link></li>
        <li><Link to="#">권리침해신고</Link></li>
        <li><Link to="#">이용약관</Link></li>
        <li><Link to="#">상거래 피해구제신청</Link></li>
        <li><Link to="#">카페운영정책</Link></li>
        <li><Link to="#">고객센터</Link></li>
        <li><Link to="#">문의하기</Link></li>
      </ul>
      <p className="copy">&copy; Kokoa-copy Corp.</p>
    </footer>
  )
}

export default Footer