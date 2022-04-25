import './App.css';
import Topbar from './component/Topbar';
import Home from './component/Home';
import Post from './component/Post';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let nav = [
    {id: 1, main: 'Python', sub: ['영한 번역기', '.exe 계산기', 'django로 만든 TodoList']},
    {id: 2, main: 'HTML, CSS', sub: ['Position', 'Display', 'Animation', 'Pseudo-classes']},
    {id: 3, main: 'Javascript', sub: ['Node', 'NodeList', 'Scope']},
    {id: 4, main: 'ETC', sub: ['알고리즘 문제']}
  ]
  let contents = [
    { title: '영한 번역기', text: '파이썬으로 만든 영한 번역기입니다. 번역할 문구와 번역한 문구를 넣고 클립보드(ctrl + c)에 문구를 저장한 후 실행하면 번역이 실행됩니다.'},
    { title: '.exe 계산기', text: '게임용으로 만든 계산기 입니다. 사용할 아이템의 종류별 개수를 입력하면 성장 정도를 계산해 줍니다.'},
    { title: 'django로 만든 TodoList', text: 'django에 대한 책의 예제를 따라 만든 TodoList입니다.'}
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar contents={contents} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/component/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
