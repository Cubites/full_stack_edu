import React from 'react';
import './home.css';

const Home = (props) => {
  return (
    <div className="home">
      <h5>
        <i className="fa-solid fa-house-chimney"></i>
        <i className="fa-solid fa-angle-right"></i>
      </h5>
      <div className="homeBox">
        <h1>About</h1>
        <div>
          <h3>소개</h3>
          <p>백엔드 개발자를 목표로 하고 있습니다.</p>
          <p>현재 node.js를 사용한 풀스택 국비교육을 수강 중입니다.</p>
        </div>
        <div>
          <h3>Project</h3>
          <ul>
            <li>영한 번역기</li>
            <li>계산기 exe 제작</li>
            <li>TodoList</li>
          </ul>
        </div>
        <div>
          <h3>Education</h3>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home