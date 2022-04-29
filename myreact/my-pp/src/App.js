import './App.css';
import Topbar from './component/Topbar';
import Home from './component/Home';
import Postlist from './component/Postlist';
import Post from './component/Post';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import navlist from './data/data'

function App() {
  // const [showHome, setShowHome] = useState(true);
  // const [showPostlist, setShowPostlist] = useState(false);
  // const [showPost, setShowPost] = useState(false);
  // data 변경을 위한 index값들
  const [postlistIndex, setPostlistIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar
          setPostlistIndex={(_switch) => {setPostlistIndex(_switch);}}
          setPostIndex={(_switch) => {setPostIndex(_switch);}} />
        <Routes>
          <Route path={"/"} 
            element={<Home 
              setPostlistIndex={(_switch) => {setPostlistIndex(_switch);}}
              setPostIndex={(_switch) => {setPostIndex(_switch);}} />} />
          <Route path={"/" + navlist[postlistIndex].title + "/"} 
            element={<Postlist 
              index={postlistIndex}
              setPostlistIndex={(_switch) => {setPostlistIndex(_switch);}}
              setPostIndex={(_switch) => {setPostIndex(_switch);}} />} />
          <Route path={"/" + navlist[postlistIndex].title + "/" + navlist[postlistIndex].contents[postIndex].link} 
            element={<Post 
              plindex={postlistIndex} pindex={postIndex}
              setPostlistIndex={(_switch) => {setPostlistIndex(_switch);}}     
              setPostIndex={(_switch) => {setPostIndex(_switch);}} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
