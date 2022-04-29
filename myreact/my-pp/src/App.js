import './App.css';
import Topbar from './component/Topbar';
import Home from './component/Home';
import Postlist from './component/Postlist';
import Post from './component/Post';
import React, { useState } from 'react';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showPostlist, setShowPostlist] = useState(false);
  const [showPost, setShowPost] = useState(false);
  // data 변경을 위한 index값들
  const [postlistIndex, setPostlistIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);
  return (
    <div className="App">
      <Topbar setShowHome={(_switch) => {setShowHome(_switch);}}
              setShowPostlist={(_switch) => {setShowPostlist(_switch);}}
              setShowPost={(_switch) => {setShowPost(_switch);}}
              setPostlistIndex={(_switch) => {setPostlistIndex(_switch);}}
              setPostIndex={(_switch) => {setPostIndex(_switch);}} />
      {showHome && <Home setShowHome={(_switch) => {setShowHome(_switch);}}
              setShowPostlist={(_switch) => {setShowPostlist(_switch);}}
              setShowPost={(_switch) => {setShowPost(_switch);}}
              setPostlistIndex={(_switch) => {setPostlistIndex(_switch);}}
              setPostIndex={(_switch) => {setPostIndex(_switch);}} />}
      {showPostlist && <Postlist index={postlistIndex} 
              setShowHome={(_switch) => {setShowHome(_switch);}}
              setShowPostlist={(_switch) => {setShowPostlist(_switch);}}
              setShowPost={(_switch) => {setShowPost(_switch);}} 
              setPostlistIndex={(_switch) => {setPostlistIndex(_switch);}}     
              setPostIndex={(_switch) => {setPostIndex(_switch);}} />}
      {showPost && <Post plindex={postlistIndex} pindex={postIndex}              
              setShowHome={(_switch) => {setShowHome(_switch);}}
              setShowPostlist={(_switch) => {setShowPostlist(_switch);}}
              setShowPost={(_switch) => {setShowPost(_switch);}} 
              setPostlistIndex={(_switch) => {setPostlistIndex(_switch);}}     
              setPostIndex={(_switch) => {setPostIndex(_switch);}} />}
    </div>
  );
}

export default App;
