import './about.css';
import Post from '../../comp/posts/Posts';

export default function About() {
  return (
    <div className='about'>
      <div className="aboutBox">
        <div className="aboutBefore">
          <h2>과거에 했던 것</h2>
          <ul>
            <li><i class="fa-regular fa-language"></i></li>
            <li>wiki 영어 번역기</li>
            <li><i class="fa-brands fa-python"></i></li>
          </ul>
          <ul>
            <li><i class="fa-solid fa-calculator"></i></li>
            <li>게임용 효율 계산기 .exe</li>
            <li><i class="fa-brands fa-python"></i></li>
          </ul>
          <ul>
            <li><i class="fa-regular fa-clipboard-question"></i></li>
            <li>알고리즘 문제풀이</li>
            <li><i class="fa-brands fa-python"></i></li>
          </ul>
        </div>
        <div className="aboutNow">
          <h2>지금 하고 있는 것</h2>
          <ul>
            <li><i class="fa-regular fa-building-columns"></i></li>
            <li>Nodejs 기반 풀스택 국비교육 수강</li>
            <li><i class="fa-brands fa-js"></i></li>
          </ul>
          <ul>
            <li><i class="fa-regular fa-earth-europe"></i></li>
            <li>D3.js를 이용한 세계지도 기반 웹사이트 제작</li>
            <li><i class="fa-brands fa-js"></i></li>
          </ul>
          <ul>
            <li><i class="fa-regular fa-clipboard-question"></i></li>
            <li>알고리즘 문제풀이</li>
            <li><i class="fa-brands fa-python"></i></li>
          </ul>
        </div>
        <div className="aboutNext">
          <h2>앞으로 할 것</h2>
          <ul>
            <li><i class="fa-solid fa-book"></i></li>
            <li>CS(Computer Science) 공부(운영체제, 네트워크, 자료구조, DB 등)</li>
            <li></li>
          </ul>
          <p></p>
        </div>
      </div>
      <div className="postsBox">
        <h3>Posts</h3>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
