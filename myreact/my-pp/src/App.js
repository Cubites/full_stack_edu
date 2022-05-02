import './App.css';
import Topbar from './component/Topbar';
import Home from './component/Home';
import Postlist from './component/Postlist';
import Post from './component/Post';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import navlist from './data/data'

function App() {
  // const [showHome, setShowHome] = useState(true);
  // const [showPostlist, setShowPostlist] = useState(false);
  // const [showPost, setShowPost] = useState(false);
  // data 변경을 위한 index값들
  const maxPLIndex = navlist.length;
  let postlist = [];
  let posts = [];
  for(let i = 0; i < maxPLIndex; i++){
    postlist.push(
      <Route path={"/" + navlist[i].link + "/"} element={<Postlist index={i} />} />
    )
    const maxPIndex = navlist[i].contents.length;
    for(let j = 0; j < maxPIndex; j++){
      posts.push(
        <Route path={"/" + navlist[i].link + "/" + navlist[i].contents[j].link} 
          element={<Post plindex={i} pindex={j} />} />
      )
    }
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          {postlist}
          {posts}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
