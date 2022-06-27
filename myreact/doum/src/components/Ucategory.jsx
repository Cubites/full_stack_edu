import React from 'react';
import { Link } from 'react-router-dom';

const Ucategory = () => {
  return (
    <section className="container quick pt-55 pb-50">
      <h2 className="pb-30"><strong>카테고리</strong> 별 랭킹보기</h2>
      <ul>
        <li>
          <Link to="#"><strong>생활 · 경제</strong></Link>
          <Link to="#">생활 · 건강</Link>
          <Link to="#">경제 · 금융</Link>
          <Link to="#">정치 · 사회</Link>
          <Link to="#" className="ml-50"><strong>팬카페</strong></Link>
        </li>
        <li>
          <Link to="#"><strong>친목 · 모임</strong></Link>
          <Link to="#">친목 여성</Link>
          <Link to="#" className="ml-50"><strong>게임 · 만화</strong></Link>
          <Link to="#">만화 · 애니메이션</Link>
          <Link to="#">게임</Link>
        </li>
        <li>
          <Link to="#"><strong>취미 · 레저</strong></Link>
          <Link to="#">취미</Link>
          <Link to="#">스포츠 · 레저</Link>
          <Link to="#"><strong>연예 · 예술</strong></Link>
          <Link to="#">영화</Link>
          <Link to="#">음악</Link>
          <Link to="#">방송 · 연예</Link>
          <Link to="#">문학 · 예술</Link>
        </li>
        <li>
          <Link to="#"><strong>지역 · 동문</strong></Link>
          <Link to="#">동창 · 동문</Link>
          <Link to="#">지역 · 고향</Link>
          <Link to="#">e-마을</Link>
          <Link to="#">군대</Link>
          <Link to="#">종교</Link>
        </li>
        <li>
          <Link to="#"><strong>학문 · 교육</strong></Link>
          <Link to="#">교육 · 외국어</Link>
          <Link to="#">컴퓨터 · 인터넷</Link>
          <Link to="#">과학 · 인문</Link>
          <Link to="#">대학 · 대학원</Link>
          <Link to="#">초중고교</Link>
        </li>
      </ul>
    </section>
  )
}

export default Ucategory